import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {proposal, proposalStatusInfluencer, proposalStatusSponsor} from '../../../constants';
@Component({
  selector: 'app-proposal-status-non-profit',
  templateUrl: './proposal-status-non-profit.component.html',
  styleUrls: ['./proposal-status-non-profit.component.scss']
})
export class ProposalStatusNonProfitComponent implements OnInit {
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
