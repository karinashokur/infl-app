import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {CHECKUSEROPTION} from '../Apollo/queries';
import {LocalstorageService} from '../localstorage.service';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService) {
  }
  async getUserOption() {
    return await this.apollo.mutate({
      mutation: CHECKUSEROPTION,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise();
  }
}
