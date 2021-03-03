import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatusInfluencer, proposalStatusSponsor} from '../../../constants';
@Component({
  selector: 'app-proposal-status-sponsor',
  templateUrl: './proposal-status-sponsor.component.html',
  styleUrls: ['./proposal-status-sponsor.component.scss']
})
export class ProposalStatusSponsorComponent implements OnInit {
  constructor(private router: Router) { }
  proposals = [
    {
      ...proposal
    }
  ];
  statusInfluencer = proposalStatusInfluencer;
  ngOnInit(): void {
  }
  goToViewProposal(id: number) {
    this.router.navigate(['dashboard/viewProposal', id]);
  }
  getRemainingDays(proposalApprovalDate: Date) {
    return 2;
  }
}
