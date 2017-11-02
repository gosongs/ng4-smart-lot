import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExceptionRoutingModule } from './exception-routing.module';
import { E403Component } from './e403/e403.component';
import { E404Component } from './e404/e404.component';
import { E500Component } from './e500/e500.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExceptionRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [E403Component, E404Component, E500Component]
})
export class ExceptionModule { }
