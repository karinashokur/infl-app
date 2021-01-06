import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegisterServiceService} from '../register-service.service';
@Component({
  selector: 'app-onboarding-d',
  templateUrl: './onboarding-d.component.html',
  styleUrls: ['./onboarding-d.component.scss']
})
export class OnboardingDComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private registerServiceService: RegisterServiceService) { }
  options = ['$0 - $1,000', '$1,001 - $5,000', '$5,001 - $10,000', '$10,001 - $50,000',
    '$50,001 - $100,000', '$100,001 - $500,000', '$500,001 - $1,000,000', '$1,000,000+'];
  form = this.formBuilder.group({
    range: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
    this.registerServiceService.setQuestionnaireDInfluencer(this.form.value.range);
  }
}
