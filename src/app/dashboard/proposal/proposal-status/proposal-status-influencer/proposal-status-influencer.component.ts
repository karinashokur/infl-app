import { Component, OnInit } from '@angular/core';
import {proposal, proposalStatus, proposalStatusInfluencer, proposalStatusSponsor} from '../../../../constants';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';
import {LocalstorageService} from '../../../../localstorage.service';
import {GETPROPOSALSTATUSINFLUENCER, INFLUENCERREADPROPOSAL} from '../../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ProposalStatus, ProposalStatusQuery} from '../proposalStatusQuery';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-proposal-status-influencer',
  templateUrl: './proposal-status-influencer.component.html',
  styleUrls: ['./proposal-status-influencer.component.scss']
})
export class ProposalStatusInfluencerComponent implements OnInit {
  constructor(private router: Router,
              private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private tostr: ToastrService) { }
  proposals: ProposalStatus[];
  status = proposalStatus;
  ngOnInit(): void {
    console.log(this.getRemainingDays(new Date('2020-07-27')));
    this.apollo.mutate({
      mutation: GETPROPOSALSTATUSINFLUENCER,
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
  setProposalToRead(id) {
    this.apollo.mutate({
      mutation: INFLUENCERREADPROPOSAL,
      variables: {
        id
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.tostr.success('We appreciate you giving this a go', '');
    });
  }
  goToViewProposal(id: number, index: number) {
    if (this.proposals[index].statusInfluencer.id !== '1') {
      this.setProposalToRead(id);
    }
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    const currentDate = new Date();
    const diff = new Date(proposalApprovalDate).getTime() - currentDate.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
