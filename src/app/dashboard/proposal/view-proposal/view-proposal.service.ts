import { Injectable } from '@angular/core';
import {proposal} from '../../../constants';
import {Apollo} from 'apollo-angular';
import {PROPOSALTOCAMPAIGN} from '../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../../localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class ViewProposalService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
  startCampaign(proposalId: string) {
    this.apollo.mutate({
      mutation: PROPOSALTOCAMPAIGN,
      variables: {
        proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then();
  }
}
