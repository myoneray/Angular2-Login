import { Component, OnInit } from '@angular/core';

// 将service注入进来
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = "";
    //存储用户信息 成功返回false
    if (!this.authService.login(username, password)) {
      this.message = '用户信息输入错误！';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 3000);
    }
    return false;
  }

  // 登出返回false
  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }
}
