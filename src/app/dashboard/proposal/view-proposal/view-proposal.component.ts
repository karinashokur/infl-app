import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../constants';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-view-proposal',
  templateUrl: './view-proposal.component.html',
  styleUrls: ['./view-proposal.component.scss']
})
export class ViewProposalComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id === '1') {
      this.router.navigate(['dashboard/influencer/viewProposal/', id]);
    } else if (id === '2') {
      this.router.navigate(['dashboard/non-profit/viewProposal/', id]);
    } else {
      this.router.navigate(['dashboard/sponsor/viewProposal/', id]);
    }
  }
  onSubmit() {
  }
}
