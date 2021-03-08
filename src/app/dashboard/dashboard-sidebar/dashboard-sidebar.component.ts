import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {SessionStorageService} from '../../sessionstorage.service';
import {Router} from '@angular/router';
import {LogoutEventEmitterService} from './logout-modal/logout-event-emitter.service';
import {user} from '../../constants';
import {DashboardSidebarService} from './dashboard-sidebar.service';
export class UserSideBar {
  userId;
  imgSrc;
  firstName;
  lastName;
  position;
  companyName;
}
class UserQueryDetail {
  data: {
    user: {
      id;
      non_profit: {
        firstName;
        lastName;
        organisation;
      };
      influencer: {
        firstName;
        lastName;
        googlePhotoUrl;
      };
      sponsor: {
        firstName;
        lastName;
        organisation;
      }
    }
  };
}
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  constructor(private router: Router,
              private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private logoutEventEmitterService: LogoutEventEmitterService,
              private dashboardSidebarService: DashboardSidebarService) {
  }
  showLogoutPopup: boolean;
  user: UserSideBar;
  ngOnInit(): void {
    if (!this.localstorageService.isLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      this.dashboardSidebarService.getUser().then((data: UserSideBar) => {
        this.user = data;
      });
    }
  }
  showLogout() {
    this.logoutEventEmitterService.onFirstComponentButtonClick();
  }
  goToUser() {
    this.router.navigate(['dashboard/user/', this.user.userId]);
  }
}
