import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E403Component } from './e403';
import { E404Component } from './e404';
import { E500Component } from './e500';

const routes: Routes = [
  {
    path: '403',
    component: E403Component
  },
  {
    path: '404',
    component: E404Component
  },
  {
    path: '500',
    component: E500Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule {
}
