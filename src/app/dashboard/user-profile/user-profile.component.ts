import { Component, OnInit } from '@angular/core';
import {influencerCategories, nonProfitCategories} from '../../constants';
import {ActivatedRoute, Router} from '@angular/router';
import {YoutubeData, YoutubeService} from '../youtube.service';
import {Apollo} from 'apollo-angular';
import {UserProfileService} from './user-profile.service';
import {ApolloQueryResult} from 'apollo-client';
class UserProfileQuery {
    user: {
      id;
      influencer: {
        firstName;
        lastName;
        googleAuthToken;
        type_of_influencers: [{
          id;
        }]
        type_of_non_profit_organisations: [{
          id;
        }]
      }
    };
}
class UserProfile {
  firstName;
  lastName;
  organisation;
  position;
  audience: [{
    image;
    title;
    stats;
  }];
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private router: Router,
              private youtubeService: YoutubeService,
              private userProfileService: UserProfileService,
              private route: ActivatedRoute) {}
  channelName;
  channelDescription;
  bannerImage;
  currentTab = 1;
  googleAuthToken;
  influencerId;
  userProfile: UserProfile;
  nonProfitOrganisation: string[];
  sponsorCategories: string[];
  selectedNonProfit: number[];
  selectedInfluencer: number[];
  ngOnInit(): void {
    this.influencerId = this.route.snapshot.paramMap.get('id');
    this.userProfileService.getUserDetails(this.influencerId).then((data: ApolloQueryResult<UserProfileQuery>) => {
      this.userProfile = {
        firstName: data.data.user.influencer.firstName,
        lastName: data.data.user.influencer.lastName,
        organisation: 'Influencer(s)',
        position: 'YouTuber',
        audience: [{
          image: 'assets/images/YouTube%20Logo.png',
          title: 'Youtube',
          stats: {}
        }]
      };
      this.googleAuthToken = data.data.user.influencer.googleAuthToken;
      console.log('set Token');
      this.selectedInfluencer = [];
      data.data.user.influencer.type_of_influencers.forEach((inf) => {
        this.selectedInfluencer.push(Number(inf.id));
      });
      this.selectedNonProfit = [];
      data.data.user.influencer.type_of_non_profit_organisations.forEach((npo) => {
        this.selectedNonProfit.push(Number(npo.id));
      });
      console.log(this.selectedNonProfit);
      console.log(this.selectedInfluencer);
      console.log(this.userProfile);
      this.getYoutube();
    });
    this.nonProfitOrganisation = influencerCategories;
    this.sponsorCategories = nonProfitCategories;
  }
  getYoutube() {
    this.youtubeService.getYoutubeData(this.googleAuthToken).then((youtubeData: YoutubeData) => {
      console.log(youtubeData);
      this.userProfile.audience[0].stats = {...youtubeData.items[0].statistics};
      this.channelName = youtubeData.items[0].brandingSettings.channel.title;
      this.channelDescription = youtubeData.items[0].brandingSettings.channel.description;
      this.bannerImage = youtubeData.items[0].brandingSettings.image.bannerImageUrl;
    }).catch((error) => {
      console.log(error);
      this.userProfile.audience[0].stats = {
        authToken: 'expired'
      };
      this.channelName = '';
      this.channelDescription = '';
      this.bannerImage = 'assets/images/road-nature-trees-branches-38537.jpg';
    });
  }
  isCategorySelected(num): boolean {
    return this.selectedInfluencer.indexOf(num) !== -1;
  }
  isNonProfitSelected(num): boolean {
    return this.selectedNonProfit.indexOf(num) !== -1;
  }
  setTab(tab) {
    this.currentTab = tab;
  }
  goToCreateProposal() {
    this.router.navigate(['dashboard/createProposal'], { queryParams: { influencerId: this.influencerId }});
  }
}
