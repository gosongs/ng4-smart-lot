import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'machine',
        loadChildren: './pages/machine/machine.module#MachineModule'
      },
      {
        path: 'order',
        loadChildren: './pages/order/order.module#OrderModule'
      },
      {
        path: 'setting',
        loadChildren: './pages/setting/setting.module#SettingModule'
      },
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}