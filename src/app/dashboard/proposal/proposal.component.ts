import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService,
              private router: Router) { }
  ngOnInit(): void {
    if (this.localstorageService.getUserType() === '1') {
      this.router.navigate(['dashboard/influencer/proposal']);
    } else if (this.localstorageService.getUserType() === '2') {
      this.router.navigate(['dashboard/non-profit/proposal']);
    } else {
      this.router.navigate(['dashboard/sponsor/proposal']);
    }
  }
}
