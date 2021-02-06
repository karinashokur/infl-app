import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NonProfitComponent} from './non-profit/non-profit.component';
import {InfluencerComponent} from './influencer/influencer.component';
import {SponsorComponent} from './sponsor/sponsor.component';
import {MessagingComponent} from './messaging/messaging.component';
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'non-profit', component: NonProfitComponent},
      {path: 'influencer', component: InfluencerComponent},
      {path: 'sponsor', component: SponsorComponent},
      {path: 'non-profit/messaging', component: MessagingComponent},
      {path: 'influencer/messaging', component: MessagingComponent},
      {path: 'sponsor/messaging', component: MessagingComponent}
    ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
