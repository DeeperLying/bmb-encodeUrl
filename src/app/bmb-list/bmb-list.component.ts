import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-bmb-list',
  templateUrl: './bmb-list.component.html',
  styleUrls: ['./bmb-list.component.css']
})
export class BmbListComponent implements OnInit {

  constructor(
    private localhost: Location,
  ) { }

  ngOnInit() {
    // console.log(this.localhost);
  }

}
