import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private router: Router) { }
  ngOnInit(): void {
    if (this.localstorageService.getUserType() === '1') {
      this.router.navigate(['dashboard/influencer/payments']);
    } else if (this.localstorageService.getUserType() === '2') {
      this.router.navigate(['dashboard/non-profit/payments']);
    } else {
      this.router.navigate(['dashboard/sponsor/payments']);
    }
  }
}
