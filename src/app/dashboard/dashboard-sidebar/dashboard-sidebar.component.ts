import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {SessionStorageService} from '../../sessionstorage.service';
import {Router} from '@angular/router';
import {LogoutEventEmitterService} from "../logout-modal/logout-event-emitter.service";
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  constructor(private router: Router,
              private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private logoutEventEmitterService: LogoutEventEmitterService) { }
  imgSrc: string;
  showLogoutPopup: boolean;
  ngOnInit(): void {
    this.imgSrc = 'assets/images/BlackBackground.png';
    if (!this.localstorageService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }
  showLogout() {
    this.logoutEventEmitterService.onFirstComponentButtonClick();
  }
}
