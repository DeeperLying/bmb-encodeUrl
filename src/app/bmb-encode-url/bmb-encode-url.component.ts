import { Component, OnInit } from '@angular/core';
import * as Clipboard from 'clipboard/dist/clipboard.js';
import PopperJs from 'popper.js';


@Component({
  selector: 'app-bmb-encode-url',
  templateUrl: './bmb-encode-url.component.html',
  styleUrls: ['./bmb-encode-url.component.css']
})
export class BmbEncodeUrlComponent implements OnInit {
  private obj: object;
  public  url: string;
  public  href: string;
  public  pares = {val: '场馆', id : 1};
  public  parseId: number;
  public  parseURL: string;
  constructor() {}

  ngOnInit() {
    this.clipboard();
  }

  public onCopy (): void {
    let str: string;
    const wxParam: string[] = ['code', 'state', 'passport', 'v', 'from', 'isappinstalled', 'sharer'];
    if (!this.href) {
      return;
    }
    const startIndex: number = this.href.indexOf('www.snsports.cn/webapp/');
    if (startIndex <= -1) {
      console.log('格式错误');
      return;
    }
    const last = this.href.indexOf('?');
    if (last !== -1) {
       str = this.href.substring(this.href.indexOf('#/') + 2, last);
    } else {
      str  = this.href.substr(this.href.indexOf('#/') + 2);
    }
    this.url     = 'https://www.snsports.cn/webapp/index.html?redirect=' + str;
    const route  = this.href.substr( this.href.indexOf('?'));
    const Params = this.getRequest(route);
    for (const obj in Params ) {
      wxParam.map((value, index, array) => {
        if (obj === value) {
          delete Params[obj];
        }
      });
    }
    for (const obj in Params) {
      if ( Params[obj] !== 'undefined') {
        this.url += '&' + obj + '=' + Params[obj];
        console.log(this.url);
      } else {
        this.url += '&' + obj;
      }
    }
  }

  private getRequest( href: string ): object {
    const url = href; // 获取url中"?"符后的字串
    const theRequest = new Object();
    if (url.indexOf('?') !== -1) {
      const str = url.substr(1);
      const strs = str.split('&');
      for (let i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      }
    }
    return theRequest;
  }

  private clipboard (): void {
    const clipboard = new Clipboard('.copy-btn');
    clipboard.on('success', function(e) {
      console.log('Action:', e.action);
      console.log('Text:', e.text);
      console.log('Trigger:', e.trigger);
      alert('复制成功');
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      alert('复制成功');
    });
  }

  private parseUlr(): void {
    if ( !this.pares.id ) {
      return;
    }

    if (this.pares.id === 1) {
      console.log('场馆');
      this.parseURL = 'https://www.snsports.cn/activity/venue/index.html?redirect=home&venueId=' + this.parseId;
    } else if (this.pares.id === 2) {
      console.log('赛事');
      this.parseURL = 'https://www.snsports.cn/webapp/index.html?redirect=aggregation&unionId=' + this.parseId;
    }

  }

}
