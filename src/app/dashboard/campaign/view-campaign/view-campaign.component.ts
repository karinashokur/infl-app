import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Apollo} from 'apollo-angular';
import {LocalstorageService} from '../../../localstorage.service';
import {CAMPAIGNDETAILS} from '../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ApolloQueryResult} from 'apollo-client';
import {EndCampaignModalService} from '../end-campaign-modal/end-campaign-modal.service';
class Campaign {
  campaign: {
    youtubeVideoLink
    proposal: {
      non_profit: {
        id
        non_profit: {
          organisation
        }
      }
      influencer: {
        id
        influencer: {
          firstName
          lastName
        }
      }
      sponsor: {
        sponsor: {
          organisation
        }
      }
      campaignStartDate
      campaignEndDate
      campaignName
      percentRevenueInfluencer
      id
    }
  };
}
@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private endCampaignModalService: EndCampaignModalService) { }
  campaignId: string;
  userId;
  campaign: Campaign;
  ngOnInit(): void {
    this.userId = this.localstorageService.getId();
    this.campaignId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apollo.query({
      query: CAMPAIGNDETAILS,
      variables: {
        campaignId: this.campaignId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<Campaign>) => {
        this.campaign = {...data.data};
    });
  }
  endCampaign() {
    this.endCampaignModalService.onFirstComponentButtonClick({
      cid: this.campaignId,
      pid: this.campaign.campaign.proposal.id,
      npId: this.campaign.campaign.proposal.non_profit.id,
      infId: this.campaign.campaign.proposal.influencer.id,
      infPer: this.campaign.campaign.proposal.percentRevenueInfluencer,
      infRev: 10000
    });
  }
}
