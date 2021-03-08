import { Injectable } from '@angular/core';
import {user} from '../../constants';
import {LocalstorageService} from '../../localstorage.service';
import {UserSideBar} from './dashboard-sidebar.component';
import {Apollo} from 'apollo-angular';
import {GETUSERDETAILSSIDEBAR} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
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
@Injectable({
  providedIn: 'root'
})
export class DashboardSidebarService {
  constructor(private localstorageService: LocalstorageService,
              private apollo: Apollo) { }
  async getUser() {
    let userSideBar: UserSideBar = null;
    await this._getDataSideBar().then((data: UserQueryDetail) => {
      if (this.localstorageService.getUserType() === '1') {
        userSideBar = {
          userId: data.data.user.id,
          imgSrc: data.data.user.influencer.googlePhotoUrl,
          firstName: data.data.user.influencer.firstName,
          lastName: data.data.user.influencer.lastName,
          position: 'Influencer(s)',
          companyName: ''
        };
      } else if (this.localstorageService.getUserType() === '2') {
        userSideBar = {
          userId: '',
          imgSrc: 'assets/images/Shelli.png',
          firstName: data.data.user.non_profit.firstName,
          lastName: data.data.user.non_profit.lastName,
          position: 'Placeholder',
          companyName: data.data.user.non_profit.organisation,
        };
      } else if (this.localstorageService.getUserType() === '3') {
        userSideBar = {
          userId: '',
          imgSrc: 'assets/images/Romeo.png',
          firstName: data.data.user.sponsor.firstName,
          lastName: data.data.user.sponsor.lastName,
          position: 'Placeholder',
          companyName: data.data.user.sponsor.organisation,
        };
      }
    });
    return userSideBar;
  }
  _getDataSideBar() {
    return this.apollo.mutate({
      mutation: GETUSERDETAILSSIDEBAR,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise();
  }
}
