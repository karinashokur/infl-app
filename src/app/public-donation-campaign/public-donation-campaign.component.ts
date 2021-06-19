import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {get} from 'scriptjs';
import {amazonPayUrl} from '../constants';
import {Apollo} from 'apollo-angular';
import {PUBLICCAMPAIGNDETAILS} from '../Apollo/queries';
import {ApolloQueryResult} from 'apollo-client';
class PublicCampaignDetails {
  campaign: {
    youtubeVideoLink;
    proposal: {
      campaignName
      campaignDescription
      sendOnlyToInfluencers
    non_profit: {
    non_profit: {
    firstName
    lastName
    organisation
  }
}
sponsor: {
  sponsor: {
    firstName
    lastName
    organisation
  }
}
influencer: {
  influencer: {
    firstName
    lastName
    googlePhotoUrl
    googleAuthToken
  }
}
}
  };
}
@Component({
  selector: 'app-public-donation-campaign',
  templateUrl: './public-donation-campaign.component.html',
  styleUrls: ['./public-donation-campaign.component.scss']
})
export class PublicDonationCampaignComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apollo: Apollo) { }
  campaignId;
  url;
  scriptLoaded: boolean;
  campaignDetails: PublicCampaignDetails;
  ngOnInit(): void {
    if (!this.scriptLoaded) {
      get(amazonPayUrl, () => {
        console.log('loaded');
        this.scriptLoaded = true;
      });
    }
    this.campaignId = this.activatedRoute.snapshot.paramMap.get('id');
    this.url = this.router.url;
    console.log(this.campaignId);
    console.log(this.activatedRoute.snapshot.paramMap);
    this.apollo.query({
      query: PUBLICCAMPAIGNDETAILS,
      variables: {
        id: this.campaignId
      }
    }).toPromise().then((data: ApolloQueryResult<PublicCampaignDetails>) => {
      this.campaignDetails = {...data.data};
    }, (error) => {
      console.log(error);
    });
  }
}
