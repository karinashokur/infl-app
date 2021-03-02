import { Component, OnInit } from '@angular/core';
import {influencerCategories, nonProfitCategories, user} from '../../constants';
import {Router} from '@angular/router';
import {YoutubeService} from '../youtube.service';
class YoutubeData {
  items: [{
    brandingSettings: {
      channel: {
        title
        description
      }
      image: {
        bannerImageUrl
      }
    }
    statistics: {
      commentCount
      subscriberCount
      videoCount
      viewCount
    }
  }];
}
class UserProfile {
  firstName;
  lastName;
  position;
  companyName;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private router: Router,
              private youtubeService: YoutubeService) {
    this.youtubeService._getYoutubeRequest().then((data: YoutubeData) => {
      console.log(data);
      this.bannerImage = data.items[0].brandingSettings.image.bannerImageUrl;
      this.channelDescription = data.items[0].brandingSettings.channel.description;
      this.channelName = data.items[0].brandingSettings.channel.title;
      this.audience = [{
        image: 'assets/images/YouTube%20Logo.png',
        title: 'Youtube',
        stats: data.items[0].statistics
      }];
    });
    this.userProfile = {
      firstName: user.firstName,
      lastName: user.lastName,
      position: user.position,
      companyName: user.companyName
    };
  }
  channelName;
  channelDescription;
  bannerImage;
  currentTab;
  audience;
  userProfile: UserProfile;
  nonProfitOrganisation: string[];
  sponsorCategories: string[];
  selectedNonProfit: number[];
  selectedCategories: number[];
  ngOnInit(): void {
    this.currentTab = 1;
    this.nonProfitOrganisation = influencerCategories;
    this.sponsorCategories = nonProfitCategories;
    this.selectedCategories = user.selectedCategories;
    this.selectedNonProfit = user.selectedNonProfit;
  }
  isCategorySelected(num): boolean {
    return this.selectedCategories.indexOf(num) !== -1;
  }
  isNonProfitSelected(num): boolean {
    return this.selectedNonProfit.indexOf(num) !== -1;
  }
  setTab(tab) {
    this.currentTab = tab;
  }
  goToCreateProposal() {
    this.router.navigate(['dashboard/createProposal']);
  }
}
