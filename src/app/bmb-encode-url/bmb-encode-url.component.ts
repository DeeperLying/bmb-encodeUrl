import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmb-encode-url',
  templateUrl: './bmb-encode-url.component.html',
  styleUrls: ['./bmb-encode-url.component.css']
})
export class BmbEncodeUrlComponent implements OnInit {
  private obj : object;
  public  href: string;
  public  url : string;
  constructor() { }

  ngOnInit() {
  }

  public onCopy (): void {
    let str: string;
    if (!this.href) {
      return;
    }
    const startIndex: number = this.href.indexOf('www.snsports.cn/webapp/');
    if (startIndex <= -1) {
      console.log('格式错误');
      return;
    }
    const last = this.href.indexOf('?');
    if (last != -1) {
       str = this.href.substring(this.href.indexOf('#/') + 2, last);
    } else {
      str  = this.href.substr(this.href.indexOf('#/') + 2);
    }
    console.log(str);
    this.url     = 'https://www.snsports.cn/webapp/index.html?redirect=' + str;
    const route  = this.href.substr( this.href.indexOf('?'));
    const Params = this.getRequest(route);
    for (const obj in Params) {
      this.url += '&' + obj + '=' + Params[obj];
    }
    this.obj = document.querySelector('.copy').getElementsByTagName('textarea')[0];
    // this.obj.select();
    try {
      if ( document.execCommand('copy', false, null)) {
        document.execCommand( 'Copy ' );
        alert('已复制好，可贴粘。');
      } else {
        alert('复制失败，请手动复制');
      }
    } catch (err) {
        alert('复制失败，请手动复制');
    }
  }

  private getRequest( href: string ): object {
    const url = href; // 获取url中"?"符后的字串
    const theRequest = new Object();
    if (url.indexOf('?') != -1) {
      const str = url.substr(1);
      const strs = str.split('&');
      for (let i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      }
    }
    return theRequest;
  }

}
