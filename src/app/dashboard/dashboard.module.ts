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
    ],
  exports: [
    DashboardTopbarComponent,
    DashboardSidebarComponent,
    LogoutModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
