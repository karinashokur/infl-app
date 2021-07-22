import {Component, Input, OnInit} from '@angular/core';
import {influencerCategories, influencerId, nonProfitCategories} from '../../../../constants';
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
  categories = influencerCategories;
  categoriesId = influencerId;
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
  getCategoryIndex(id) {
    const numId = Number(id);
    return this.categoriesId.indexOf(numId)+1;
  }
}
