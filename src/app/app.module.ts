import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { BmbListComponent } from './bmb-list/bmb-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BmbNotFoundComponent } from './bmb-not-found/bmb-not-found.component';
import { BmbEncodeUrlComponent } from './bmb-encode-url/bmb-encode-url.component';
import { BmbHeaderComponent } from './bmb-header/bmb-header.component';
import { BmbFooterComponent } from './bmb-footer/bmb-footer.component';
import { AppUtilModule } from './app-util.module';
import { HighlightDirective } from './highlight.directive';
import { TextDecorationPipe, ImageSrc } from './text-decoration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BmbListComponent,
    BmbNotFoundComponent,
    BmbEncodeUrlComponent,
    BmbHeaderComponent,
    BmbFooterComponent,
    HighlightDirective,
    TextDecorationPipe,
    ImageSrc
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AppUtilModule,
  ],
  exports: [

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
