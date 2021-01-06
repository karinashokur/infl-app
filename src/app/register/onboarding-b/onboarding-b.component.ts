import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../register-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  profiles = {
    influencer: {
      heading: 'Now we’ll focus on your work as a content creator!',
      subheading: 'For us to align you with the best nonprofit organizations' +
        ' and sponsors for your brand, please tell us about the type of content you create',
      question: 'Please select from the list below the general style of content you enjoy creating'
    },
    nonProfit: {
      heading: 'Now we’ll focus on the type of influencer content to align your organization with',
      subheading: 'This will help us understand which influencers to match' +
        ' you with based on the type of content they normally post and the interests of their audience',
      question: 'Please select from the list below the general style of content you’re interested in aligning with'
    },
    corporateSponsor: {
      heading: 'Now we’ll focus on the type of influencer content to align your brand with',
      subheading: 'This will help us understand which influencers to match your brand' +
        ' with based on the type of content they normally post and the interests of their audience',
      question: 'Please select from the list below the general style of content you’re interested in aligning with'
    }
  };
  options = ['Auto & Vehicles', 'Comedy', 'Education', 'Entertainment', 'Fashion',
    'Film & Animation', 'Food & Beverage', 'Gaming', 'Health & Fitness', 'How To',
    'Music', 'News & Politics', 'Nonprofit & Activism', 'People & Blogs', 'Pets & Animals',
    'Science & Technology', 'Self Care & Beauty', 'Sports', 'Travel & Events'];
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
