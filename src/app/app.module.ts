import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layouts/full-layout';
import { AppAsideComponent } from './components/app-aside';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppBreadcrumbComponent } from './components/app-breadcrumb/app-breadcrumb.component';
import { SimpleComponent } from './layouts/simple/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AppAsideComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
