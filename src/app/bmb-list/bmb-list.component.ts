import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppUtilModule } from '../app-util.module';

@Component({
  selector: 'app-bmb-list',
  templateUrl: './bmb-list.component.html',
  styleUrls: ['./bmb-list.component.css']
})
export class BmbListComponent implements OnInit {

  constructor(
    private localhost: Location,
    private util: AppUtilModule,
  ) { }

  ngOnInit() {
  }

}
