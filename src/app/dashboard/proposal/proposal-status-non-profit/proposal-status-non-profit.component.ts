import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatusInfluencer, proposalStatusSponsor} from '../../../constants';
import {Apollo} from 'apollo-angular';
import {GETPROPOSALWITHNONPROFIT} from '../../../Apollo/queries';
import {LocalstorageService} from '../../../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-proposal-status-non-profit',
  templateUrl: './proposal-status-non-profit.component.html',
  styleUrls: ['./proposal-status-non-profit.component.scss']
})
export class ProposalStatusNonProfitComponent implements OnInit {
  constructor(private router: Router,
              private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  proposals = [
    {
      ...proposal
    }
  ];
  statusInfluencer = proposalStatusInfluencer;
  statusSponsor = proposalStatusSponsor;
  ngOnInit(): void {
    this.apollo.mutate({
      mutation: GETPROPOSALWITHNONPROFIT,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then();
  }
  goToViewProposal(id: number) {
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    return 2;
  }
}
