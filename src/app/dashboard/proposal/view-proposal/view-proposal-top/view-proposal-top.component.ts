import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
@Component({
  selector: 'app-view-proposal-top',
  templateUrl: './view-proposal-top.component.html',
  styleUrls: ['./view-proposal-top.component.scss']
})
export class ViewProposalTopComponent implements OnInit {
  constructor() { }
  proposal = proposal;
  ngOnInit(): void {
  }
  isCheckBox(num: number) {
    return this.proposal.campaignVisibility.indexOf(num) !== -1;
  }
}
