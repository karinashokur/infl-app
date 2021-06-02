import { Component, OnInit } from '@angular/core';
import {StartCampaignModalEventEmitterService} from './start-campaign-modal/start-campaign-modal-event-emitter.service';
import {Apollo} from 'apollo-angular';
import {
  GETACTIVECAMPAIGNSINFLUENCER,
  GETACTIVECAMPAIGNSNONPROFIT, GETACTIVECAMPAIGNSSPONSOR,
  GETCAMPAIGNTOSTARTINFLUENCER
} from '../../Apollo/queries';
import {LocalstorageService} from '../../localstorage.service';
import {ApolloQueryResult} from 'apollo-client';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {user} from '../../constants';
class NewCampaign {
    proposals: [{
      campaignName
      non_profit: {
        non_profit: {
          organisation
        }
      }
      sponsor: {
        sponsor: {
          firstName
          lastName
        }
      }
    id
    budgetSponsor
    }];
}
class ActiveCampaign {
  proposals: [{
    campaign: {
    youtubeVideoLink
    id
      }
      non_profit: {
      non_profit: {
      organisation
    }
    }
    campaignName
    sponsor: {
      sponsor: {
        organisation
      }
    }
      }];
}
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  constructor(private startCampaignModalEventEmitterService: StartCampaignModalEventEmitterService,
              private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private router: Router) {
    this.userType = this.localstorageService.getUserType();
  }
  newCampaign: NewCampaign;
  activeCampaign: ActiveCampaign;
  userType: string;
  ngOnInit(): void {
    this.apollo.query({
      query: GETCAMPAIGNTOSTARTINFLUENCER,
      variables: {
        influencer: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<NewCampaign>) => {
      this.newCampaign = data.data;
    });
    let camapignQuery;
    if (this.userType === '1') {
      camapignQuery = GETACTIVECAMPAIGNSINFLUENCER;
    } else if (this.userType === '2') {
      camapignQuery = GETACTIVECAMPAIGNSNONPROFIT;
    } else {
      camapignQuery = GETACTIVECAMPAIGNSSPONSOR;
    }
    this.apollo.query({
      query: camapignQuery,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<ActiveCampaign>) => {
      console.log(data.data);
      this.activeCampaign = data.data;
    });
  }
  showStartCampaignModal(campaignId: number) {
    this.startCampaignModalEventEmitterService.onFirstComponentButtonClick(campaignId);
  }
  goToCampaign(id) {
    console.log(id);
    this.router.navigate(['dashboard/campaign', id]);
  }
}
