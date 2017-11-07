import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list';
import { DetailComponent } from './detail';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: '设备列表'
    }
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: {
      title: '设备详情'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineRoutingModule {
}
