import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {CREATEPROPOSAL} from '../../../Apollo/queries';
import {LocalstorageService} from '../../../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CreateProposalService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private tostr: ToastrService) { }
  createProposal(form) {
    this.apollo.mutate({
      mutation: CREATEPROPOSAL,
      variables: {
        campaignName: form.campaignName,
        campaignStartDate: this.convertDateString(form.campaignStartDate),
        callToAction: form.callToAction,
        proposalApprovalDate: this.convertDateString(form.proposalApprovalDate),
        campaignEndDate: this.convertDateString(form.campaignEndDate),
        campaignDescription: form.campaignDescription,
        campaignCategory: form.campaignCategory,
        targetPlatform: form.targetPlatform,
        howShouldItLook: form.howShouldItLook,
        interestInForProfit: form.interestInForProfit,
        promotingCampaign: form.promotingCampaign,
        sendOnlyToInfluencer: form.sendOnlyToInfluencer,
        offerTaxReceipt: form.offerTaxReceipt,
        anyThingElse: form.anyThingElse,
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe((data) => {
      this.tostr.success('We hope this is a successful campaign', 'Proposal Created!');
    });
  }
  convertDateString(date): string {
    return date;
  }
}
