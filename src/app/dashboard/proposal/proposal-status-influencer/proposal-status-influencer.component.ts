import { Component, OnInit } from '@angular/core';
import {proposal, proposalStatusInfluencer, proposalStatusSponsor} from '../../../constants';
import {Router} from '@angular/router';
@Component({
  selector: 'app-proposal-status-influencer',
  templateUrl: './proposal-status-influencer.component.html',
  styleUrls: ['./proposal-status-influencer.component.scss']
})
export class ProposalStatusInfluencerComponent implements OnInit {
  constructor(private router: Router) { }
  proposals = [
    {
      ...proposal
    }
  ];
  statusInfluencer = proposalStatusInfluencer;
  statusSponsor = proposalStatusSponsor;
  ngOnInit(): void {
  }
  goToViewProposal(id: number) {
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    return 2;
  }
}
