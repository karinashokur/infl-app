import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-onboarding-a',
  templateUrl: './onboarding-a.component.html',
  styleUrls: ['./onboarding-a.component.scss']
})
export class OnboardingAComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log('aa');
  }
}
