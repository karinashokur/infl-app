import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
import {FormBuilder, Validators} from '@angular/forms';
import {ViewProposalService} from '../view-proposal.service';
import {ViewProposal} from '../viewProposal';
import {
  ACCEPTPROPOSALINFLUENCER,
  GETVIEWPROPOSAL,
  INFLUENCERREJECTPROPOSAL,
  SPONSORACCEPTPROPOSAL
} from '../../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ApolloQueryResult} from 'apollo-client';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from '../../../../localstorage.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-view-proposal-sponsor',
  templateUrl: './view-proposal-sponsor.component.html',
  styleUrls: ['./view-proposal-sponsor.component.scss']
})
export class ViewProposalSponsorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private viewProposalService: ViewProposalService,
              private apollo: Apollo,
              private activatedRoute: ActivatedRoute,
              private localstorageService: LocalstorageService,
              private tostr: ToastrService,
              private router: Router) { }
  proposal: ViewProposal;
  sponsorProposalForm = this.formBuilder.group({
    promotingCampaign: ['', Validators.required],
    budget: ['', Validators.required],
    howShouldItLook: ['', Validators.required],
    callToAction: ['', Validators.required],
    anyThingElse: ['', Validators.required]
  });
  proposalId;
  ngOnInit(): void {
    this.proposalId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apollo.query({
      query: GETVIEWPROPOSAL,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<ViewProposal>) => {
      this.proposal = {...data.data};
    });
  }
  onAccept() {
    console.log(this.sponsorProposalForm.value.budget);
    console.log(typeof(this.sponsorProposalForm.value.budget));
    if (this.sponsorProposalForm.valid) {
      console.log(this.sponsorProposalForm.value);
      this.apollo.mutate({
        mutation: SPONSORACCEPTPROPOSAL,
        variables: {
          id: this.proposalId,
          budgetSponsor: this.sponsorProposalForm.value.budget,
          howShouldItLook: this.sponsorProposalForm.value.howShouldItLook,
          callToAction: this.sponsorProposalForm.value.callToAction,
          anyThingElse: this.sponsorProposalForm.value.anyThingElse,
          promotingCampaign: this.sponsorProposalForm.value.promotingCampaign,
          user: this.localstorageService.getId()
        },
        context: {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
        }
      }).toPromise().then((data) => {
        this.tostr.success('We need to confirm with the influencer and non profit', 'Thanks for your donation');
        this.router.navigate(['dashboard/proposal']);
      });
    } else {
      this.tostr.warning('Please fill all the fields', 'Oops');
    }
  }
  onDecline() {
  }
}
