import { Injectable } from '@angular/core';
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
import {REGISTER_QUERY, CREATESPONSOR, CREATENONPROFIT,
  CREATEINFLUENCER} from '../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {DashboardService} from '../dashboard/dashboard.service';
import {SocialToken} from '../social-media/social-media.component';
import {ToastrService} from 'ngx-toastr';
import {retry} from 'rxjs/operators';
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
              private router: Router,
              private dashboardService: DashboardService,
              private tostr: ToastrService
  ) {}
  questionnaireA;
  questionnaireB;
  questionnaireC;
  questionnaireD;
  async registerUser(email, password) {
    await this.registerUserUtil(email, password).then((data: RegisterCover) => {
      console.log(data);
      this.localstorageService.storeJwtToken(data.data.register.jwt);
      this.localstorageService.storeId(data.data.register.user.id);
      this.tostr.success('Welcome Aboard ' + email, 'Registration Successful');
    });
    await this.router.navigate(['register/onboardinga']);
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
    this.submitCreateSponsor();
    this.router.navigate(['dashboard/sponsor']);
  }
  public setQuestionnaireCInfluencer(typeOfInterestedNonProfit, interestedInDonating) {
    this.questionnaireC = new QuestionnaireCInfluencer(typeOfInterestedNonProfit, interestedInDonating);
    this.router.navigate(['register/onboardingd']);
  }
  public setQuestionnaireCNonProfit(nameOfOrganization, categoryOfOrganization) {
    this.questionnaireC = new QuestionnareCNonProfit(nameOfOrganization, categoryOfOrganization);
    this.submitCreateNonProfit();
    this.router.navigate(['dashboard/non-profit']);
  }
  public setQuestionnaireDInfluencer(compensationRange) {
    this.questionnaireD = new QuestionnareDInfluencer(compensationRange);
    this.router.navigate(['social']);
  }
   submitCreateSponsor() {
    this.apollo.mutate({
      mutation: CREATESPONSOR,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        organisation: this.questionnaireC.nameOfCompany,
        user: this.localstorageService.getId(),
        type_of_influencers: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.nonprofitInterestedIn
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe((data) => {
      this.tostr.success('', 'Hola, ' + this.questionnaireA.firstName);
    });
  }
  submitCreateNonProfit() {
    this.apollo.mutate({
      mutation: CREATENONPROFIT,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        organisation: this.questionnaireC.nameOfOrganization,
        user: this.localstorageService.getId(),
        type_of_influencers: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.categoryOrganizationRepresent
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe((data) => {
      this.tostr.success('', 'Hola, ' + this.questionnaireA.firstName);
    });
  }
  submitCreateInfluencer(token: SocialToken) {
    this.apollo.mutate({
      mutation: CREATEINFLUENCER,
      variables: {
        firstName: this.questionnaireA.firstName,
        lastName: this.questionnaireA.lastName,
        interestedInDonating: this.questionnaireC.interestedInDonating,
        rangeOfCompensation: this.questionnaireD.compensationRange,
        user: this.localstorageService.getId(),
        type_of_influencers: this.questionnaireB.contentType,
        type_of_non_profit_organisations: this.questionnaireC.typeOfInterestedNonProfit,
        googleAuthToken: token.google.authToken,
        amazonAuthToken: token.amazon.authToken,
        googlePhotoUrl: token.google.photoUrl
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe((data) => {
      this.tostr.success('', 'Hola, ' + this.questionnaireA.firstName);
    });
  }
}
