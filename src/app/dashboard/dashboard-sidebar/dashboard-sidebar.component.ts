import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {SessionStorageService} from '../../sessionstorage.service';
import {Router} from '@angular/router';
import {LogoutEventEmitterService} from './logout-modal/logout-event-emitter.service';
import {user} from '../../constants';
import {DashboardSidebarService} from './dashboard-sidebar.service';
import {DashboardService} from '../dashboard.service';
import {GETUSERDETAILSSIDEBAR} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
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
              private dashboardSidebarService: DashboardSidebarService,
              private dashboardService: DashboardService,
              private apollo: Apollo) {
    if (!this.localstorageService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }
  showLogoutPopup: boolean;
  user: UserSideBar;
  ngOnInit(): void {
      this.apollo.mutate({
        mutation: GETUSERDETAILSSIDEBAR,
        variables: {
          id: this.localstorageService.getId()
        },
        context: {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
        }
      }).toPromise().then((data: UserQueryDetail) => {
        this.user = this.convertUserQueryDetailToUserSideBar(data);
        console.log(this.convertUserQueryDetailToUserSideBar(data));
        console.log(data);
      });
      console.log('ng on inti finish fetched');
  }
  convertUserQueryDetailToUserSideBar(data) {
    if (this.localstorageService.getUserType() === '1') {
      return {
        userId: data.data.user.id,
        imgSrc: data.data.user.influencer.googlePhotoUrl,
        firstName: data.data.user.influencer.firstName,
        lastName: data.data.user.influencer.lastName,
        position: 'Influencer(s)',
        companyName: 'YouTube'
      };
    } else if (this.localstorageService.getUserType() === '2') {
      return {
        userId: '',
        imgSrc: 'assets/images/Shelli.png',
        firstName: data.data.user.non_profit.firstName,
        lastName: data.data.user.non_profit.lastName,
        position: 'Placeholder',
        companyName: data.data.user.non_profit.organisation,
      };
    } else if (this.localstorageService.getUserType() === '3') {
      return {
        userId: '',
        imgSrc: 'assets/images/Romeo.png',
        firstName: data.data.user.sponsor.firstName,
        lastName: data.data.user.sponsor.lastName,
        position: 'Representative',
        companyName: data.data.user.sponsor.organisation,
      };
    }
  }
  showLogout() {
    this.logoutEventEmitterService.onFirstComponentButtonClick();
  }
  goToUser() {
    this.router.navigate(['dashboard/user/', this.user.userId]);
  }
  redirectToDashboard() {
    this.dashboardService.redirectToDashboard();
  }
}
