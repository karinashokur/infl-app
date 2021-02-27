import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegisterServiceService} from '../register-service.service';
import {onBoardingScreenDRange} from '../../constants';
@Component({
  selector: 'app-onboarding-d',
  templateUrl: './onboarding-d.component.html',
  styleUrls: ['./onboarding-d.component.scss']
})
export class OnboardingDComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private registerServiceService: RegisterServiceService) { }
  options = onBoardingScreenDRange;
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
