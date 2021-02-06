import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private sessionstorageService: SessionStorageService,
              private router: Router,
              private loginService: LoginService) {
  }
  imgSrc: string;
  ngOnInit(): void {
    this.imgSrc = 'assets/images/BlackBackground.png';
  }
  logout() {
    this.localstorageService.logout();
    this.sessionstorageService.logout();
    this.router.navigate(['login']);
  }
}
