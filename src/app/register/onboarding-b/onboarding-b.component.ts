import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-onboarding-b',
  templateUrl: './onboarding-b.component.html',
  styleUrls: ['./onboarding-b.component.scss']
})
export class OnboardingBComponent implements OnInit {
  constructor() { }
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
  currentProfile = this.profiles.corporateSponsor;
  ngOnInit(): void {
  }
}
