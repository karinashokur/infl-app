import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
@Component({
  selector: 'app-view-proposal-non-profit',
  templateUrl: './view-proposal-non-profit.component.html',
  styleUrls: ['./view-proposal-non-profit.component.scss']
})
export class ViewProposalNonProfitComponent implements OnInit {
  constructor() { }
  proposal = proposal;
  ngOnInit(): void {
  }
  isCheckBox(num: number) {
    return this.proposal.campaignVisibility.indexOf(num) !== -1;
  }
  onSubmit() {
  }
}
