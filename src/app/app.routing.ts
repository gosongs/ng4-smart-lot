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
      title: '首页'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        data: {
          title: '控制台'
        }
      },
      {
        path: 'machine',
        loadChildren: './pages/machine/machine.module#MachineModule',
        data: {
          title: '设备管理'
        }
      },
      {
        path: 'order',
        loadChildren: './pages/order/order.module#OrderModule',
        data: {
          title: '订单管理'
        }
      },
      {
        path: 'setting',
        loadChildren: './pages/setting/setting.module#SettingModule',
        data: {
          title: '系统设置'
        }
      },
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        data: {
          title: '用户管理'
        }
      },
      {
        path: 'exception',
        loadChildren: './pages/exception/exception.module#ExceptionModule',
        data: {
          title: '异常'
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