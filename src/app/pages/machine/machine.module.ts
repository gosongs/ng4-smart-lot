import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MachineRoutingModule } from './machine-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MachineRoutingModule
  ],
  declarations: [ListComponent, DetailComponent]
})
export class MachineModule {
}
