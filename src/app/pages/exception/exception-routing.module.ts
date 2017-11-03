import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E403Component } from './e403';
import { E404Component } from './e404';
import { E500Component } from './e500';

const routes: Routes = [
  {
    path: '403',
    component: E403Component,
    data: {
      title: '403'
    }
  },
  {
    path: '404',
    component: E404Component,
    data: {
      title: '404'
    }
  },
  {
    path: '500',
    component: E500Component,
    data: {
      title: '500'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule {
}
