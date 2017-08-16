import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { rootRouterConfig} from "./app.routes";


// component
import { AUTH_PROVIDERS} from './services/AuthService';
import { LoginComponent } from './component/login/login.component';
import { FlowerComponent } from './component/flower/flower.component';
import { TreeComponent } from './component/tree/tree.component';
import { SchoolComponent } from './component/school/school.component';
import { TaobaoComponent } from './component/taobao/taobao.component';
import { OfoComponent } from './component/ofo/ofo.component';


// material
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';

//1>导入守卫
import {LoggedInGuard}from './guard/loggedIn.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlowerComponent,
    TreeComponent,
    SchoolComponent,
    TaobaoComponent,
    OfoComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  //3>将LoggedInGuard添加到提供者列表中
  providers: [LoggedInGuard, AUTH_PROVIDERS, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
