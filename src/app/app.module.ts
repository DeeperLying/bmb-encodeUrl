import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrRoutingModule } from './/arr-routing.module';
import { BmbListComponent } from './bmb-list/bmb-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BmbListComponent
  ],
  imports: [
    BrowserModule,
    ArrRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
