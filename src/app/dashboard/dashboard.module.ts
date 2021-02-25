import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTopbarComponent } from './dashboard-topbar/dashboard-topbar.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { SearchComponent } from './search/search.component';
import { NotificationIconComponent } from './notification-icon/notification-icon.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { MessagingComponent } from './messaging/messaging.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { InfluencerCardComponent } from './non-profit/influencer-card/influencer-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AudienceCardComponent } from './user-profile/audience-card/audience-card.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ViewProposalComponent } from './view-proposal/view-proposal.component';
import { ProposalStatusComponent } from './proposal-status/proposal-status.component';
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    DashboardTopbarComponent,
    DashboardSidebarComponent,
    SearchComponent,
    NotificationIconComponent,
    NonProfitComponent,
    MessagingComponent,
    InfluencerComponent,
    SponsorComponent,
    LogoutModalComponent,
    InfluencerCardComponent,
    UserProfileComponent,
    AudienceCardComponent,
    CreateProposalComponent,
    ViewProposalComponent,
    ProposalStatusComponent,
    ],
  exports: [
    DashboardTopbarComponent,
    DashboardSidebarComponent,
    LogoutModalComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatTabsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
