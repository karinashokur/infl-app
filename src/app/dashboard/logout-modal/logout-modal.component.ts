import {Component, Input, OnInit} from '@angular/core';
import {LogoutEventEmitterService} from './logout-event-emitter.service';
import {Router} from '@angular/router';
import {LocalstorageService} from '../../localstorage.service';
import {SessionStorageService} from '../../sessionstorage.service';
@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {
  constructor(private logoutEventEmitterService: LogoutEventEmitterService,
              private router: Router,
              private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService) { }
  show: boolean;
  ngOnInit(): void {
    if (this.logoutEventEmitterService.subsVar === undefined) {
      this.logoutEventEmitterService.subsVar = this.logoutEventEmitterService.invokeFirstComponentFunction.subscribe(((data) => {
        this.show = true;
      }));
    }
  }
  close() {
    this.show = false;
  }
  logout() {
    this.localstorageService.logout();
    this.sessionStorageService.logout();
    this.router.navigate(['login']);
  }
}
