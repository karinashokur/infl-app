import { Component, OnInit } from '@angular/core';
import {proposal} from '../../../../constants';
import {Apollo} from 'apollo-angular';
import {
  ACCEPTPROPOSALNONPROFITWITHSPONSOR,
  DECLINEPROPOSALNONPROFITWITHSPONSOR,
  GETVIEWPROPOSAL
} from '../../../../Apollo/queries';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../../../localstorage.service';
import {ApolloQueryResult} from 'apollo-client';
import {ViewProposal} from '../viewProposal';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-view-proposal-non-profit',
  templateUrl: './view-proposal-non-profit.component.html',
  styleUrls: ['./view-proposal-non-profit.component.scss']
})
export class ViewProposalNonProfitComponent implements OnInit {
  constructor(private apollo: Apollo,
              private activatedRoute: ActivatedRoute,
              private localstorageService: LocalstorageService,
              private tostr: ToastrService,
              private router: Router) { }
  proposal: ViewProposal;
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
      console.log(this.proposal);
      console.log(data.data.proposal);
    });
  }
  acceptProposal() {
    this.apollo.mutate({
      mutation: ACCEPTPROPOSALNONPROFITWITHSPONSOR,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
        this.tostr.success('Thank You for your support', 'ProposalAccepted');
        this.router.navigate(['dashboard/proposal']);
      }
    );
  }
  declineProposal() {
    this.apollo.mutate({
      mutation: DECLINEPROPOSALNONPROFITWITHSPONSOR,
      variables: {
        id: this.proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then();
  }
}
