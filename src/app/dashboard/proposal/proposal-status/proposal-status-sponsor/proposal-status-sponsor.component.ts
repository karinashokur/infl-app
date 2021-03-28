import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatus, proposalStatusInfluencer, proposalStatusSponsor} from '../../../../constants';
import {Apollo} from 'apollo-angular';
import {LocalstorageService} from '../../../../localstorage.service';
import {ProposalStatus, ProposalStatusQuery} from '../proposalStatusQuery';
import {GETPROPOSALSTATUSNONPROFIT, GETPROPOSALSTATUSSPONSOR} from '../../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-proposal-status-sponsor',
  templateUrl: './proposal-status-sponsor.component.html',
  styleUrls: ['./proposal-status-sponsor.component.scss']
})
export class ProposalStatusSponsorComponent implements OnInit {
  constructor(private router: Router,
              private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  proposals: ProposalStatus[];
  status = proposalStatus;
  ngOnInit(): void {
    this.apollo.mutate({
      mutation: GETPROPOSALSTATUSSPONSOR,
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
    return 2;
  }
}
