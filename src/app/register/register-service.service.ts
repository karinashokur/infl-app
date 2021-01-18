import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {LocalstorageService} from '../localstorage.service';
import {LoginService} from '../login/login.service';
import {QuestionnaireA} from './questionnaire/QuestionnaireA';
import {QuestionnaireB} from './questionnaire/QuestionnareB';
import {QuestionnareCCorporateSponsor} from './questionnaire/QuestionnareCCorporateSponsor';
import {QuestionnaireCInfluencer} from './questionnaire/QuestionnaireCInfluencer';
import {QuestionnareCNonProfit} from './questionnaire/QuestionnareCNonProfit';
import {QuestionnareDInfluencer} from './questionnaire/QuestionnareDInfluencer';
import {Router} from '@angular/router';
import {REGISTER_QUERY, CREATEQUESTIONNAIRECORPORATE, CREATEQUESTIONNAIRENONPROFIT,
  CREATEQUESTIONNAIREINFLUENCER, UPDATE_HAS_SUBMITTED_AND_USER_TYPE} from '../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
class RegisterCover {
  data: {
    register: {
      user: {
        id: string;
      };
      jwt: string;
    };
  };
}
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private loginService: LoginService,
              private router: Router) {}
  questionnaireA;
  questionnaireB;
  questionnaireC;
  questionnaireD;
  async registerUser(email, password) {
    await this.registerUserUtil(email, password).then((data: RegisterCover) => {
      console.log(data);
      this.localstorageService.storeJwtToken(data.data.register.jwt);
      this.localstorageService.storeId(data.data.register.user.id);
    });
    await this.loginService.checkIsLoggedIn();
  }
  async registerUserUtil(email, password) {
    return await this.apollo.mutate({
      mutation: REGISTER_QUERY,
      variables: {
        email,
        password
      }
    }).toPromise();
  }
  public setQuestionnaireA(firstName, lastName, option) {
    this.questionnaireA = new QuestionnaireA(firstName, lastName, option);
    this.router.navigate(['register/onboardingb']);
  }
  public setQuestionnaireB(contentType) {
    this.questionnaireB = new QuestionnaireB(contentType);
    this.router.navigate(['register/onboardingc']);
  }
  public setQuestionnaireCCorporateSponsor(nameOfTheCompany, isInterestedInNonProfit) {
    this.questionnaireC = new QuestionnareCCorporateSponsor(nameOfTheCompany, isInterestedInNonProfit);
    this.submitQuestionnaireCorporateSponsor();
    this.updateHasSubmittedQuestionnaireAndRedirectDashboard();
  }
  public setQuestionnaireCInfluencer(typeOfInterestedNonProfit, interestedInDonating) {
    this.questionnaireC = new QuestionnaireCInfluencer(typeOfInterestedNonProfit, interestedInDonating);
    this.router.navigate(['register/onboardingd']);
  }
  public setQuestionnaireCNonProfit(nameOfOrganization, categoryOfOrganization) {
    this.questionnaireC = new QuestionnareCNonProfit(nameOfOrganization, categoryOfOrganization);
    this.submitQuestionnaireNonProfit();
    this.updateHasSubmittedQuestionnaireAndRedirectDashboard();
  }
  public setQuestionnaireDInfluencer(compensationRange) {
    this.questionnaireD = new QuestionnareDInfluencer(compensationRange);
    this.submitQuestionnaireInfluencer();
    this.updateHasSubmittedQuestionnaireAndRedirectDashboard();
    this.router.navigate(['social']);
  }
  updateHasSubmittedQuestionnaireAndRedirectDashboard() {
    this.apollo.mutate({
      mutation: UPDATE_HAS_SUBMITTED_AND_USER_TYPE,
      variables: {
        id: this.localstorageService.getId(),
        option: this.questionnaireA.options
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
    this.router.navigate(['dashboard']);
  }
   submitQuestionnaireCorporateSponsor() {
    this.apollo.mutate({
      mutation: CREATEQUESTIONNAIRECORPORATE,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        name: this.questionnaireC.nameOfCompany,
        user: this.localstorageService.getId(),
        type_of_contents: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.nonprofitInterestedIn
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
  submitQuestionnaireNonProfit() {
    this.apollo.mutate({
      mutation: CREATEQUESTIONNAIRENONPROFIT,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        name: this.questionnaireC.nameOfOrganization,
        user: this.localstorageService.getId(),
        type_of_contents: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.categoryOrganizationRepresent
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
  submitQuestionnaireInfluencer() {
    this.apollo.mutate({
      mutation: CREATEQUESTIONNAIREINFLUENCER,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        interestInDonating: this.questionnaireC.interestedInDonating,
        rangeOfCompensation: this.questionnaireD.compensationRange,
        user: this.localstorageService.getId(),
        type_of_contents: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.typeOfInterestedNonProfit
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
}
