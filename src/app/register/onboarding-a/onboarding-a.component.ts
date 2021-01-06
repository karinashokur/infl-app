import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterServiceService} from '../register-service.service';
@Component({
  selector: 'app-onboarding-a',
  templateUrl: './onboarding-a.component.html',
  styleUrls: ['./onboarding-a.component.scss']
})
export class OnboardingAComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private registerServiceService: RegisterServiceService) { }
  form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    option: ['']
  });
  ngOnInit(): void {
  }
  onSubmit() {
    const formValue = this.form.value;
    console.log(formValue);
    this.registerServiceService.setQuestionnaireA(formValue.firstName, formValue.lastName, formValue.option);
  }
}
