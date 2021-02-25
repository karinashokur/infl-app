import { Injectable } from '@angular/core';
import {LocalstorageService} from '../localstorage.service';
import {SessionStorageService} from '../sessionstorage.service';
import {Apollo} from 'apollo-angular';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {LoginCover} from '../Apollo/loginCover';
import {HasSubmissionCovered} from '../Apollo/hasSubmissionCovered';
import {ApolloQueryResult} from 'apollo-client';
import {CHECK_QUESTIONNAIRE_SUBMISSION, LOGIN_QUERY} from '../Apollo/queries';
import {DashboardService} from '../dashboard/dashboard.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private localstorageService: LocalstorageService,
              private sessionStorageService: SessionStorageService,
              private apollo: Apollo,
              private router: Router,
              private dashboardService: DashboardService) { }
  async loginWithRemember(email, password) {
    await this.login(email, password, this.localstorageService);
  }
  async loginWithoutRemember(email, password) {
    await this.login(email, password, this.sessionStorageService);
  }
  async login(email, password, service) {
    await this.login_util(email, password).then((data: LoginCover) => {
      service.storeJwtToken(data.data.login.jwt);
      service.storeId(data.data.login.user.id);
      console.log(data);
    });
  }
  async login_util(email, password) {
    return await this.apollo.mutate({
      mutation: LOGIN_QUERY,
      variables: {
        email,
        password
      }
    }).toPromise();
  }
  async checkHasSubmittedQuestionnaire() {
    let id = this.localstorageService.getId();
    if (id === -1) {
      id = this.sessionStorageService.getId();
    }
    return await this.apollo.query({
      query: CHECK_QUESTIONNAIRE_SUBMISSION,
      variables: {
      id: '' + id
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise();
  }
  async checkSubmissionStatus() {
    let check = false;
    await this.checkHasSubmittedQuestionnaire().then((data: ApolloQueryResult<HasSubmissionCovered>) => {
      check = data.data.user.hasSubmitQuestionnaire;
    });
    return check;
  }
  async checkIsLoggedIn() {
    const checkSubmission = await this.checkSubmissionStatus();
    if (!checkSubmission) {
      this.router.navigate(['register/onboardinga']);
    } else {
      if (this.localstorageService.isLoggedIn() || this.sessionStorageService.isLoggedIn()) {
        this.router.navigate(['dashboard']);
      }
    }
  }
}
