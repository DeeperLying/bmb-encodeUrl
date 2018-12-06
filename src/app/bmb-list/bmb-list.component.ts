import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-bmb-list',
  templateUrl: './bmb-list.component.html',
  styleUrls: ['./bmb-list.component.css']
})
export class BmbListComponent implements OnInit {

  constructor(
    private localhost: Location,
    private http: ServerService
  ) { }

  ngOnInit() {
    this.http.getConfig().subscribe(
      (res: string) => {
        console.log(res, '成功');
      },
      (rej) => {
        console.log(rej, '错误');
      },
      () => {
        console.log('调用过');
      }
    );
  }

}
