import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmb-list',
  templateUrl: './bmb-list.component.html',
  styleUrls: ['./bmb-list.component.css']
})
export class BmbListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public routerLink ( ): void {
    // 路由跳转
    console.log('!');
  }

}
