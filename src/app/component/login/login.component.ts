import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
// 将service注入进来
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  username: string;
  password: string;
  message: string;

  constructor(private authService: AuthService) {
    // this.username = '12';
    // this.password = '34';
    // this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = "";
    console.log('username', this.username)
    console.log('password', this.password)
    //存储用户信息 成功返回false
    if (!this.authService.login(this.username, this.password)) {
      this.message = '用户信息输入错误！';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 3000);
    }
    return false;
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  // 登出返回false
  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }
}
