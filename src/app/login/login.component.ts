import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {LoginService} from './login.service';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService, ) { }
  loginForm = this.formBuilder.group({
    emailAddress : ['', Validators.required],
    password : ['', Validators.required],
    rememberMe : [true, Validators.required]
  });
  ngOnInit(): void {
   this.loginService.checkIsLoggedIn();
  }
  async onSubmit() {
    if (this.loginForm.value.rememberMe) {
      await this.loginService.loginWithRemember(this.loginForm.value.emailAddress, this.loginForm.value.password);
    } else {
      await this.loginService.loginWithoutRemember(this.loginForm.value.emailAddress, this.loginForm.value.password);
    }
    await this.loginService.checkIsLoggedIn();
  }
}
