import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BmbListComponent } from './bmb-list/bmb-list.component';
import { BmbNotFoundComponent } from './bmb-not-found/bmb-not-found.component';
import { BmbEncodeUrlComponent } from './bmb-encode-url/bmb-encode-url.component';

const routes: Routes = [
  { path: 'index', component: BmbListComponent },
  { path: 'encodeUrl', component: BmbEncodeUrlComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**',  component: BmbNotFoundComponent },
];

@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ] ,
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
