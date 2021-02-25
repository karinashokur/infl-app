import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NonProfitComponent} from './non-profit/non-profit.component';
import {InfluencerComponent} from './influencer/influencer.component';
import {SponsorComponent} from './sponsor/sponsor.component';
import {MessagingComponent} from './messaging/messaging.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CreateProposalComponent} from "./create-proposal/create-proposal.component";
import {ViewProposalComponent} from "./view-proposal/view-proposal.component";
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'non-profit', component: NonProfitComponent},
      {path: 'influencer', component: InfluencerComponent},
      {path: 'sponsor', component: SponsorComponent},
      {path: 'non-profit/messaging', component: MessagingComponent},
      {path: 'influencer/messaging', component: MessagingComponent},
      {path: 'sponsor/messaging', component: MessagingComponent},
      {path: 'user/:id', component: UserProfileComponent},
      {path: 'createProposal', component: CreateProposalComponent},
      {path: 'viewProposal/:id', component: ViewProposalComponent}
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
