import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {GETUSERTYPE} from '../Apollo/queries';
import {LocalstorageService} from '../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
class UserOption {
  data: {
    user: {
      user_type: {
        id: string
      }
    }
  };
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private router: Router) {
  }
  async getUserOption() {
    return await this.apollo.mutate({
      mutation: GETUSERTYPE,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise();
  }
  redirectToDashboard() {
    this.getUserOption().then((data: UserOption) => {
      this.localstorageService.setUserType(data.data.user.user_type.id);
      console.log(this.localstorageService.getUserType());
      console.log(this.localstorageService.getUserType() === '1');
      console.log(typeof(this.localstorageService.getUserType()));
      if (this.localstorageService.getUserType() === '1') {
        this.router.navigate(['/dashboard/influencer']);
      } else if (this.localstorageService.getUserType() === '2') {
        this.router.navigate(['/dashboard/non-profit']);
      } else if (this.localstorageService.getUserType() === '3') {
        this.router.navigate(['/dashboard/sponsor']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
