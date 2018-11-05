import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bmb-header',
  templateUrl: './bmb-header.component.html',
  styleUrls: ['./bmb-header.component.css']
})
export class BmbHeaderComponent implements OnInit {
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  public onBack (): void {
    this.location.back();
  }

}
