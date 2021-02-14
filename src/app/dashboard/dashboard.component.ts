import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {DashboardService} from './dashboard.service';
class UserOption {
  data: {
    user: {
      user_type: {
        id
      }
    }
  };
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private router: Router,
              private dashboardService: DashboardService) {
  }
  imgSrc: string;
  ngOnInit(): void {
    this.imgSrc = 'assets/images/BlackBackground.png';
    this.dashboardService.getUserOption().then((data: UserOption) => {
      this.localstorageService.setUserType(data.data.user.user_type.id);
      if (this.localstorageService.getUserType() === '1') {
        this.router.navigate(['/dashboard/influencer']);
      } else if (this.localstorageService.getUserType() === '2') {
        this.router.navigate(['/dashboard/non-profit']);
      } else {
        this.router.navigate(['/dashboard/sponsor']);
      }
    });
  }
  logout() {
    this.localstorageService.logout();
    this.sessionStorageService.logout();
    this.router.navigate(['login']);
  }
}
