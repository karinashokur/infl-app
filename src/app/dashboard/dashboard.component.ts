import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {DashboardService} from './dashboard.service';
import {YoutubeService} from './youtube.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private router: Router,
              private dashboardService: DashboardService,
              private youtubeService: YoutubeService) {
    this.imgSrc = 'assets/images/BlackBackground.png';
    if (this.router.url === '/dashboard') {
      this.dashboardService.redirectToDashboard();
    }
    console.log(this.youtubeService.getYoutubeData());
  }
  imgSrc: string;
  ngOnInit(): void {
  }
  logout() {
    this.localstorageService.logout();
    this.sessionStorageService.logout();
    this.router.navigate(['login']);
  }
}
