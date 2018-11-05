import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrRoutingModule } from './/arr-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArrRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
