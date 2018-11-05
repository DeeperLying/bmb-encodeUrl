import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'index', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule,
    [ RouterModule.forRoot(routes) ]
  ],
})
export class ArrRoutingModule { }
