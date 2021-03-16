import { Component, OnInit } from '@angular/core';
import {proposal, user} from '../../../constants';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from '../../../localstorage.service';
@Component({
  selector: 'app-view-proposal',
  templateUrl: './view-proposal.component.html',
  styleUrls: ['./view-proposal.component.scss']
})
export class ViewProposalComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private localstorageService: LocalstorageService) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const userType = this.localstorageService.getUserType();
    console.log(userType);
    console.log(typeof(userType));
    console.log(id);
    if (userType === '1') {
      this.router.navigate(['dashboard/influencer/viewProposal/', id]);
    } else if (userType === '2') {
      this.router.navigate(['dashboard/non-profit/viewProposal/', id]);
    } else if (userType === '3') {
      this.router.navigate(['dashboard/sponsor/viewProposal/', id]);
    } else {
      this.router.navigate(['/']);
    }
  }
  onSubmit() {
  }
}
