import { Injectable } from '@angular/core';
import {proposal} from '../../../constants';
@Injectable({
  providedIn: 'root'
})
export class ViewProposalService {
  constructor() { }
  setTrueToReadProposalInfluencer() {
    proposal.influencerStatus = 2;
  }
  acceptInfluencerProposal(revenueDonated, anyThingElse) {
    proposal.influencerStatus = 1;
    proposal.influencerTotalRevenue = revenueDonated;
    proposal.anythingElseInfluencer = anyThingElse;
  }
  rejectInfluencerProposal() {
    proposal.influencerStatus = 4;
  }
  acceptSponsorProposal(promotingCampaign: any, bubbles: any, howShouldItLook: any, callToAction: any, anyThingElse: any) {
  }
}
