import {Component, Input, OnInit} from '@angular/core';
import {nonProfitCategories} from '../../../../constants';
import {ViewProposal} from '../viewProposal';
@Component({
  selector: 'app-view-proposal-top',
  templateUrl: './view-proposal-top.component.html',
  styleUrls: ['./view-proposal-top.component.scss']
})
export class ViewProposalTopComponent implements OnInit {
  constructor() { }
  @Input()
  proposal: ViewProposal;
  categories = nonProfitCategories;
  ngOnInit(): void {
  }
  isCheckBox(num: number) {
    let isPresent = false;
    this.proposal.proposal.proposal_visibilities.forEach((data) => {
      if (('' + num) === data.id) {
        isPresent = true;
      }
    });
    return isPresent;
  }
}
