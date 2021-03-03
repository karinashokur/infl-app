import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
import {FormBuilder, Validators} from '@angular/forms';
import {ViewProposalService} from '../view-proposal.service';
@Component({
  selector: 'app-view-proposal-sponsor',
  templateUrl: './view-proposal-sponsor.component.html',
  styleUrls: ['./view-proposal-sponsor.component.scss']
})
export class ViewProposalSponsorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private viewProposalService: ViewProposalService) { }
  proposal = proposal;
  sponsorProposalForm = this.formBuilder.group({
    promotingCampaign: ['', Validators.required],
    budget: ['', Validators.required],
    howShouldItLook: ['', Validators.required],
    callToAction: ['', Validators.required],
    anyThingElse: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  isCheckBox(num: number) {
    return this.proposal.campaignVisibility.indexOf(num) !== -1;
  }
  onSubmit() {
  }
  onAccept() {
    console.log(this.sponsorProposalForm.value);
    const formVal = this.sponsorProposalForm.value;
    this.viewProposalService.acceptSponsorProposal(
      formVal.promotingCampaign,
      formVal.bubbles,
      formVal.howShouldItLook,
      formVal.callToAction,
      formVal.anyThingElse
    );
  }
  onDecline() {
    this.viewProposalService.rejectInfluencerProposal();
  }
}
