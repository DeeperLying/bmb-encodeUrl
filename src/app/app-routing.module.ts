import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BmbListComponent } from './bmb-list/bmb-list.component';
import { BmbNotFoundComponent } from './bmb-not-found/bmb-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: BmbListComponent },
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
