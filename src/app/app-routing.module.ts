import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BmbListComponent } from './bmb-list/bmb-list.component';

const routes: Routes = [
  { path: 'index', component: BmbListComponent }
];

@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ] ,
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
