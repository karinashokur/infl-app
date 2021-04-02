import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NonProfitComponent} from './non-profit/non-profit.component';
import {InfluencerComponent} from './influencer/influencer.component';
import {SponsorComponent} from './sponsor/sponsor.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CreateProposalComponent} from './proposal/create-proposal/create-proposal.component';
import {ViewProposalComponent} from './proposal/view-proposal/view-proposal.component';
import {ProposalComponent} from './proposal/proposal.component';
import {ProposalStatusInfluencerComponent
} from './proposal/proposal-status/proposal-status-influencer/proposal-status-influencer.component';
import {ProposalStatusNonProfitComponent
} from './proposal/proposal-status/proposal-status-non-profit/proposal-status-non-profit.component';
import {ProposalStatusSponsorComponent
} from './proposal/proposal-status/proposal-status-sponsor/proposal-status-sponsor.component';
import {ViewProposalNonProfitComponent
} from './proposal/view-proposal/view-proposal-non-profit/view-proposal-non-profit.component';
import {ViewProposalInfluencerComponent
} from './proposal/view-proposal/view-proposal-influencer/view-proposal-influencer.component';
import {ViewProposalSponsorComponent
} from './proposal/view-proposal/view-proposal-sponsor/view-proposal-sponsor.component';
import {PaymentsComponent} from "./payments/payments.component";
import {PaymentsSponsorComponent} from "./payments/payments-sponsor/payments-sponsor.component";
import {CampaignComponent} from "./campaign/campaign.component";
import {CheckoutComponent} from "./payments/checkout/checkout.component";
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'non-profit', component: NonProfitComponent},
      {path: 'influencer', component: InfluencerComponent},
      {path: 'sponsor', component: SponsorComponent},
      {path: 'user/:id', component: UserProfileComponent},
      {path: 'createProposal', component: CreateProposalComponent},
      {path: 'viewProposal/:id', component: ViewProposalComponent},
      {path: 'proposal', component: ProposalComponent},
      {path: 'non-profit/proposal', component: ProposalStatusNonProfitComponent},
      {path: 'influencer/proposal', component: ProposalStatusInfluencerComponent},
      {path: 'sponsor/proposal', component: ProposalStatusSponsorComponent},
      {path: 'non-profit/viewProposal/:id', component: ViewProposalNonProfitComponent},
      {path: 'influencer/viewProposal/:id', component: ViewProposalInfluencerComponent},
      {path: 'sponsor/viewProposal/:id', component: ViewProposalSponsorComponent},
      {path: 'payments', component: PaymentsComponent},
      {path: 'sponsor/payments', component: PaymentsSponsorComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'campaign', component: CampaignComponent}
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
