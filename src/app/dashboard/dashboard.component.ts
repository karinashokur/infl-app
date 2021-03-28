import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private router: Router) {
    this.imgSrc = 'assets/images/BlackBackground.png';
    console.log('dashboard constructor');
  }
  imgSrc: string;
  ngOnInit(): void {
    console.log('dashboard init');
  }
  logout() {
    this.localstorageService.logout();
    this.sessionStorageService.logout();
    this.router.navigate(['login']);
  }
}
