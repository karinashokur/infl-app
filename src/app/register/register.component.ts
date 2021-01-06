import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PasswordValidation } from './passwordValidation';
import {RegisterServiceService} from './register-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterServiceService,
              private router: Router) { }
  registerForm = this.formBuilder.group({
    emailAddress : ['', Validators.required],
    password : ['', Validators.required],
    confirmPassword : ['']
  }, {
    validator: PasswordValidation.MatchPassword 
  });
  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.registerForm.value);
    await this.registerService.registerUser(this.registerForm.value.emailAddress, this.registerForm.value.password);
    this.router.navigate(['login']);
  }
}
