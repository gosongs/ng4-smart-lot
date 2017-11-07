import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MachineRoutingModule } from './machine-routing.module';
import { AddModalComponent } from './list/add-modal/add-modal.component';
import { QrModalComponent } from './list/qr-modal/qr-modal.component';
import { EditModalComponent } from './list/edit-modal/edit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    MachineRoutingModule
  ],
  declarations: [ListComponent, DetailComponent, AddModalComponent, QrModalComponent, EditModalComponent]
})
export class MachineModule {
}
