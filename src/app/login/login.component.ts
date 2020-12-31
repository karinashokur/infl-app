import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  loginForm = this.formBuilder.group({
    emailAddress : ['', Validators.required],
    password : ['', Validators.required],
    rememberMe : [true, Validators.required]
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }
}
