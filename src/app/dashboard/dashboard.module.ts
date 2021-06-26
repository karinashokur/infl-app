import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTopbarComponent } from './dashboard-topbar/dashboard-topbar.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { SearchComponent } from './search/search.component';
import { NotificationIconComponent } from './dashboard-topbar/notification-icon/notification-icon.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LogoutModalComponent } from './dashboard-sidebar/logout-modal/logout-modal.component';
import { InfluencerCardComponent } from './non-profit/influencer-card/influencer-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AudienceCardComponent } from './user-profile/audience-card/audience-card.component';
import { CreateProposalComponent } from './proposal/create-proposal/create-proposal.component';
import { ViewProposalComponent } from './proposal/view-proposal/view-proposal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalStatusNonProfitComponent
} from './proposal/proposal-status/proposal-status-non-profit/proposal-status-non-profit.component';
import { ProposalStatusSponsorComponent
} from './proposal/proposal-status/proposal-status-sponsor/proposal-status-sponsor.component';
import {ProposalStatusInfluencerComponent
} from './proposal/proposal-status/proposal-status-influencer/proposal-status-influencer.component';
import { ViewProposalInfluencerComponent
} from './proposal/view-proposal/view-proposal-influencer/view-proposal-influencer.component';
import { ViewProposalNonProfitComponent
} from './proposal/view-proposal/view-proposal-non-profit/view-proposal-non-profit.component';
import { ViewProposalSponsorComponent
} from './proposal/view-proposal/view-proposal-sponsor/view-proposal-sponsor.component';
import { ViewProposalTopComponent
} from './proposal/view-proposal/view-proposal-top/view-proposal-top.component';
import { PaymentsComponent } from './payments/payments.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ViewCampaignComponent } from './campaign/view-campaign/view-campaign.component';
import { StartCampaignModalComponent } from './campaign/start-campaign-modal/start-campaign-modal.component';
import { EndCampaignComponent } from './campaign/end-campaign/end-campaign.component';
import { EndCampaignModalComponent } from './campaign/end-campaign-modal/end-campaign-modal.component';
@NgModule({
  declarations: [
    DashboardTopbarComponent,
    DashboardSidebarComponent,
    SearchComponent,
    NotificationIconComponent,
    NonProfitComponent,
    InfluencerComponent,
    SponsorComponent,
    LogoutModalComponent,
    InfluencerCardComponent,
    UserProfileComponent,
    AudienceCardComponent,
    CreateProposalComponent,
    ViewProposalComponent,
    ProposalStatusInfluencerComponent,
    ProposalComponent,
    ProposalStatusNonProfitComponent,
    ProposalStatusSponsorComponent,
    ViewProposalInfluencerComponent,
    ViewProposalNonProfitComponent,
    ViewProposalSponsorComponent,
    ViewProposalTopComponent,
    PaymentsComponent,
    CampaignComponent,
    ViewCampaignComponent,
    StartCampaignModalComponent,
    EndCampaignComponent,
    EndCampaignModalComponent,
    ],
    exports: [
        DashboardTopbarComponent,
        DashboardSidebarComponent,
        LogoutModalComponent,
        StartCampaignModalComponent,
        EndCampaignModalComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatSidenavModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatTableModule
    ]
})
export class DashboardModule { }
