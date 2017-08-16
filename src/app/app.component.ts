import { Component } from '@angular/core';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';


import { LoginComponent } from './component/login/login.component';
import { FlowerComponent } from './component/flower/flower.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//1>导入守卫
import {LoggedInGuard}from './guard/loggedIn.guard';
import {AUTH_PROVIDERS} from './services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
  }
}
