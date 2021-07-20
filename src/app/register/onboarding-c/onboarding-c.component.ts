import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../register-service.service';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {influencerCategories, nonProfitCategories, onBoardingCProfiles} from '../../constants';
@Component({
  selector: 'app-onboarding-c',
  templateUrl: './onboarding-c.component.html',
  styleUrls: ['./onboarding-c.component.scss']
})
export class OnboardingCComponent implements OnInit {
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
  profiles = onBoardingCProfiles;
  options = nonProfitCategories;
  formInfluencer = this.formBuilder.group({
      selectedDescription: new FormArray([]),
      partnershipWithNonProfit: ['', Validators.required]
  });
  formNonProfit = this.formBuilder.group({
    selectedDescription: new FormArray([]),
    name: ['', Validators.required]
  });
  formCorporateSponsor = this.formBuilder.group({
    selectedDescription: new FormArray([]),
    name: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  submitNonProfit() {
    this.registerServiceService.setQuestionnaireCNonProfit(this.formNonProfit.value.name, this.formNonProfit.value.selectedDescription);
    console.log(this.formNonProfit.value);
  }
  submitInfluencer() {
    this.registerServiceService
      .setQuestionnaireCInfluencer(this.formInfluencer.value.selectedDescription,
        this.formInfluencer.value.partnershipWithNonProfit === 'yes');
    console.log(this.formInfluencer.value);
  }
  submitCorporateSponsor() {
    this.registerServiceService
      .setQuestionnaireCCorporateSponsor(this.formCorporateSponsor.value.name,
        this.formCorporateSponsor.value.selectedDescription);
    console.log(this.formCorporateSponsor.value);
  }
  onCheckChange(event, form) {
    const formArray: FormArray = form.get('selectedDescription') as FormArray;
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
}
