import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
import {FormBuilder, Validators} from '@angular/forms';
import {ViewProposalService} from '../view-proposal.service';
@Component({
  selector: 'app-view-proposal-influencer',
  templateUrl: './view-proposal-influencer.component.html',
  styleUrls: ['./view-proposal-influencer.component.scss']
})
export class ViewProposalInfluencerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private viewProposalService: ViewProposalService) { }
  proposal = proposal;
  influencerProposalForm = this.formBuilder.group({
    revenueDonated: ['', Validators.required],
    anyThingElse: ['', Validators.required]
  });
  ngOnInit(): void {
    this.viewProposalService.setTrueToReadProposalInfluencer();
  }
  isCheckBox(num: number) {
    return this.proposal.campaignVisibility.indexOf(num) !== -1;
  }
  onAccept() {
    console.log(this.influencerProposalForm.value);
    this.viewProposalService.acceptInfluencerProposal(
      this.influencerProposalForm.value.revenueDonated,
      this.influencerProposalForm.value.anyThingElse);
  }
  onDecline() {
    this.viewProposalService.rejectInfluencerProposal();
  }
}
