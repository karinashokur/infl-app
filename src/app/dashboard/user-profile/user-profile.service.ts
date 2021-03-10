import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {USERPROFILEQUERY} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService) { }
    getUserDetails(id) {
      return this.apollo.query({
      query: USERPROFILEQUERY,
      variables: {
        id
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise();
  }
}
