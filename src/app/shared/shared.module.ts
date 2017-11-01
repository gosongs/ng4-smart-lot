import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  providers: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class SharedModule {
}
