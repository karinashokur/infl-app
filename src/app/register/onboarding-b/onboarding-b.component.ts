import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../register-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {influencerCategories, influencerId, nonProfitCategories, onBoardingScreenB} from '../../constants';
@Component({
  selector: 'app-onboarding-b',
  templateUrl: './onboarding-b.component.html',
  styleUrls: ['./onboarding-b.component.scss']
})
export class OnboardingBComponent implements OnInit {
  constructor(private registerServiceService: RegisterServiceService,
              private formBuilder: FormBuilder) {
    if (this.registerServiceService.questionnaireA.option === '1') {
      this.currentProfile = this.profiles.influencer;
    } else if (this.registerServiceService.questionnaireA.option === '2') {
      this.currentProfile = this.profiles.nonProfit;
    } else {
      this.currentProfile = this.profiles.corporateSponsor;
    }
  }
  currentProfile;
  profiles = onBoardingScreenB;
  options = influencerCategories;
  optionID = influencerId;
  form = this.formBuilder.group({
    selectedOptions: new FormArray([])
  });
  onCheckChange(event) {
    const formArray: FormArray = this.form.get('selectedOptions') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value.selectedOptions);
    this.registerServiceService.setQuestionnaireB(this.form.value.selectedOptions);
  }
}
