import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatus, proposalStatusInfluencer, proposalStatusSponsor} from '../../../constants';
import {Apollo} from 'apollo-angular';
import {GETPROPOSALWITHNONPROFIT} from '../../../Apollo/queries';
import {LocalstorageService} from '../../../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
class ProposalStatusNonProfit {
  data: {
    proposals: [{
      id
      proposalApprovalDate
      campaignName
      influencer: {
        influencer: {
          firstName
          lastName
        }
      }
      statusInfluencer: {
        id
      }
      statusSponsor: {
        id
      }
    }]
  };
}
@Component({
  selector: 'app-proposal-status-non-profit',
  templateUrl: './proposal-status-non-profit.component.html',
  styleUrls: ['./proposal-status-non-profit.component.scss']
})
export class ProposalStatusNonProfitComponent implements OnInit {
  constructor(private router: Router,
              private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  proposals;
  status = proposalStatus;
  ngOnInit(): void {
    this.apollo.mutate({
      mutation: GETPROPOSALWITHNONPROFIT,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ProposalStatusNonProfit) => {
      this.proposals = [...data.data.proposals];
      console.log(this.proposals);
    });
  }
  goToViewProposal(id: number) {
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    return 2;
  }
}
