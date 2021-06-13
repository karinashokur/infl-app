import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
  CREATEPAYMENTSPONSORTOID,
  SETPAYMENTINFLUENCER,
  SETPAYMENTSPONSORTOINFLUENCER, SETPAYMENTSPONSORTONONPROFIT,
  STARTACAMPAIGN
} from '../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {LocalstorageService} from '../../../localstorage.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
class CreatePayment {
  data: {
    createPayment: {
      payment: {
        id
      }
    }
  };
}
@Injectable({
  providedIn: 'root'
})
export class ViewProposalService {
  constructor(private apollo: Apollo,
              private localstorageService: LocalstorageService,
              private router: Router,
              private tostr: ToastrService) { }
  startCampaign(proposalId: string, influencerId: string, nonProfitId: string, sponsorBudget: number, sponsorId: string) {
    this.apollo.mutate({
      mutation: STARTACAMPAIGN,
      variables: {
        proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      console.log('set is a campaign to true');
      this.createPaymentStoInf(influencerId, sponsorBudget, proposalId, sponsorId);
      this.createPaymentStoNP(nonProfitId, sponsorBudget, proposalId, sponsorId);
    });
  }
  createPaymentStoInf(id, amount, proposalId, sponsorId) {
    this.apollo.mutate({
      mutation: CREATEPAYMENTSPONSORTOID,
      variables: {
        id,
        sponsorId,
        proposalId,
        amount: amount / 2
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: CreatePayment) => {
        console.log('created payment from s to inf');
        console.log(data);
        this.setPaymentStoI(proposalId, data.data.createPayment.payment.id);
    });
  }
  createPaymentStoNP(id, amount, proposalId, sponsorId) {
    this.apollo.mutate({
      mutation: CREATEPAYMENTSPONSORTOID,
      variables: {
        id,
        sponsorId,
        proposalId,
        amount: amount / 2
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: CreatePayment) => {
      console.log('created payment from s to np');
      this.setPaymentStoNP(proposalId, data.data.createPayment.payment.id);
    });
  }
  private setPaymentStoI(proposalId: string, paymentId: string) {
    this.apollo.mutate({
      mutation: SETPAYMENTSPONSORTOINFLUENCER,
      variables: {
        proposalId,
        paymentId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      console.log('set payment from s to inf');
    });
  }
  private setPaymentStoNP(proposalId: string, paymentId: string) {
    this.apollo.mutate({
      mutation: SETPAYMENTSPONSORTONONPROFIT,
      variables: {
        proposalId,
        paymentId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      console.log('set payment from s to np');
    });
  }
  startCampaignOnlyInfluencer(proposalId: any) {
    this.apollo.mutate({
      mutation: STARTACAMPAIGN,
      variables: {
        proposalId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.router.navigate(['dashboard/payments']);
    });
  }
}
