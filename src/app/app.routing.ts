import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout';
import { SimpleComponent } from './layouts/simple';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'machine',
        loadChildren: './pages/machine/machine.module#MachineModule',
        data: {
          title: 'Machine'
        }
      },
      {
        path: 'order',
        loadChildren: './pages/order/order.module#OrderModule',
        data: {
          title: 'Order'
        }
      },
      {
        path: 'setting',
        loadChildren: './pages/setting/setting.module#SettingModule',
        data: {
          title: 'Setting'
        }
      },
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        data: {
          title: 'User'
        }
      },
      {
        path: 'exception',
        loadChildren: './pages/exception/exception.module#ExceptionModule',
        data: {
          title: 'Exception'
        }
      }
    ]
  },
  {
    path: '',
    component: SimpleComponent,
    children: [
      {
        path: 'account',
        loadChildren: './pages/account/account.module#AccountModule'
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