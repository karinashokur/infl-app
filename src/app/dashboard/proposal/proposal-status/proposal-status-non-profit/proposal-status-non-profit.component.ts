import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatus, proposalStatusInfluencer, proposalStatusSponsor} from '../../../../constants';
import {Apollo} from 'apollo-angular';
import {GETPROPOSALSTATUSNONPROFIT} from '../../../../Apollo/queries';
import {LocalstorageService} from '../../../../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
import {ProposalStatus, ProposalStatusQuery} from '../proposalStatusQuery';
@Component({
  selector: 'app-proposal-status-non-profit',
  templateUrl: './proposal-status-non-profit.component.html',
  styleUrls: ['./proposal-status-non-profit.component.scss']
})
export class ProposalStatusNonProfitComponent implements OnInit {
  constructor(private router: Router,
              private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  proposals: ProposalStatus[];
  status = proposalStatus;
  ngOnInit(): void {
    this.apollo.mutate({
      mutation: GETPROPOSALSTATUSNONPROFIT,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ProposalStatusQuery) => {
      this.proposals = [...data.data.proposals];
      console.log(this.proposals);
    });
  }
  goToViewProposal(id: number) {
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    const currentDate = new Date();
    const diff = proposalApprovalDate.getTime() - currentDate.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
