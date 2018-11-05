import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BmbListComponent } from './bmb-list/bmb-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BmbNotFoundComponent } from './bmb-not-found/bmb-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BmbListComponent,
    BmbNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
