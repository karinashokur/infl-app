import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../register-service.service';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
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
  profiles = {
    influencer: {
      heading: 'Help us understand the types of nonprofit organizations you hope to partner with',
      subheading: 'To make sure we match you with the perfect partners we need to understand which categories are of interest to you',
    },
    nonProfit: {
      heading: 'Tell us more about the type of organization you represent',
      subheading: 'To make sure we match you with the perfect partners we need to understand which categories you represent',
    },
    corporateSponsor: {
      heading: 'Tell us about the type of corporation you represent',
      subheading: 'To make sure we match you with the right ' +
        'partners and content we need to understand which categories you would like to align with',
    }
  };
  options = ['Animals', 'Arts, Culture, Humanities', 'Community Development', 'Education',
  'Environment', 'Health', 'Human & Civil Rights', 'Human Services', 'International',
  'Religion', 'Research & Public Policy'];
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
