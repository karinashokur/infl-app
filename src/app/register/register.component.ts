import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PasswordValidation } from './passwordValidation';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  registerForm = this.formBuilder.group({
    emailAddress : ['', Validators.required],
    password : ['', Validators.required],
    confirmPassword : ['']
  }, {
    validator: PasswordValidation.MatchPassword 
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
