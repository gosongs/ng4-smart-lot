import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MachineRoutingModule } from './machine-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    MachineRoutingModule
  ],
  declarations: [ListComponent, DetailComponent]
})
export class MachineModule {
}
