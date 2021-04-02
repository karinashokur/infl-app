import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
import {FormBuilder, Validators} from '@angular/forms';
import {ViewProposalService} from '../view-proposal.service';
import {ViewProposal} from '../viewProposal';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from '../../../../localstorage.service';
import {ToastrService} from 'ngx-toastr';
import {
  ACCEPTPROPOSALINFLUENCER,
  GETVIEWPROPOSAL, INFLUENCEACCEPTPROPOSALWITHSPONSOR, INFLUENCEREJECTPROPOSALWITHSPONSOR,
  INFLUENCERREADPROPOSAL,
  INFLUENCERREJECTPROPOSAL
} from '../../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ApolloQueryResult} from 'apollo-client';
@Component({
  selector: 'app-view-proposal-influencer',
  templateUrl: './view-proposal-influencer.component.html',
  styleUrls: ['./view-proposal-influencer.component.scss']
})
export class ViewProposalInfluencerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private apollo: Apollo,
              private activatedRoute: ActivatedRoute,
              private localstorageService: LocalstorageService,
              private tostr: ToastrService,
              private router: Router,
              private viewProposalService: ViewProposalService) { }
  proposal: ViewProposal;
  influencerProposalForm = this.formBuilder.group({
    revenueDonated: ['', Validators.required],
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
    if (this.influencerProposalForm.valid) {
      console.log(this.influencerProposalForm.value);
      this.apollo.mutate({
        mutation: ACCEPTPROPOSALINFLUENCER,
        variables: {
          id: this.proposalId,
          revenueDonated: this.influencerProposalForm.value.revenueDonated,
          anythingElseInfluencer: this.influencerProposalForm.value.anyThingElse
        },
        context: {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
        }
      }).toPromise().then((data) => {
        this.tostr.success('Thanks for you support', 'Proposal Accepted');
        this.router.navigate(['dashboard/proposal']);
      });
    } else {
      this.tostr.warning('Please fill all the fields', 'Oops');
    }
  }
  onDecline() {
    this.apollo.mutate({
      mutation: INFLUENCERREJECTPROPOSAL,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.tostr.success('We hope we could find better proposals for you', 'Proposal Rejected');
      this.router.navigate(['dashboard/proposal']);
    });
  }
  onAcceptWithSponsor() {
    if (this.proposal.proposal.statusNonProfitWithSponsor.id === '1') {
      this.viewProposalService.startCampaign(this.proposalId);
    }
    this.apollo.mutate({
      mutation: INFLUENCEACCEPTPROPOSALWITHSPONSOR,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.tostr.success('Thank You for you support', '');
      this.router.navigate(['dashboard/proposal']);
    });
  }
  onRejectWithSponsor() {
    this.apollo.mutate({
      mutation: INFLUENCEREJECTPROPOSALWITHSPONSOR,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.tostr.success('Thank You for you support', '');
      this.router.navigate(['dashboard/proposal']);
    });
  }
}
