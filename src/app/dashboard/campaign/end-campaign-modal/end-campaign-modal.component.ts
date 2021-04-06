import { Component, OnInit } from '@angular/core';
import {LogoutEventEmitterService} from '../../dashboard-sidebar/logout-modal/logout-event-emitter.service';
import {Router} from '@angular/router';
import {LocalstorageService} from '../../../localstorage.service';
import {SessionStorageService} from '../../../sessionstorage.service';
import {EndCampaignModalService} from './end-campaign-modal.service';
import {Apollo} from 'apollo-angular';
import {SETCAMPAIGNENDED, SETPAYMENTINFLUENCER} from '../../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
class CampaignEndQuery {
  data: {
    updateProposal: {
      proposal: {
        id
      }
    }
    createPayment: {
      payment: {
        id
      }
    }
  };
}
@Component({
  selector: 'app-end-campaign-modal',
  templateUrl: './end-campaign-modal.component.html',
  styleUrls: ['./end-campaign-modal.component.scss']
})
export class EndCampaignModalComponent implements OnInit {
  constructor(private endCampaignModalService: EndCampaignModalService,
              private router: Router,
              private localstorageService: LocalstorageService,
              private apollo: Apollo) { }
  show: boolean;
  campaignId;
  proposalId;
  infId;
  npId;
  infPer;
  infRev;
  paymentId;
  ngOnInit(): void {
    if (this.endCampaignModalService.subsVar === undefined) {
      this.endCampaignModalService.subsVar = this.endCampaignModalService.invokeFirstComponentFunction.subscribe(((data) => {
        console.log(data);
        this.show = true;
        this.campaignId = data.cid;
        this.proposalId = data.pid;
        this.npId = data.npId;
        this.infId = data.infId;
        this.infPer = data.infPer;
        this.infRev = data.infRev;
      }));
    }
  }
  close() {
    this.show = false;
  }
  endCampaign() {
    console.log(this.npId);
    this.show = false;
    this.apollo.mutate({
      mutation: SETCAMPAIGNENDED,
      variables: {
        proposalId: this.proposalId,
        influencerId: this.infId,
        nonProfitID: this.npId,
        amount: this.infRev * (this.infPer / 100)
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: CampaignEndQuery) => {
      this.paymentId = data.data.createPayment.payment.id;
      if (this.paymentId) {
        this.setPaymentId(this.paymentId);
      }
    });
  }
  private setPaymentId(paymentId: any) {
    this.apollo.mutate({
      mutation: SETPAYMENTINFLUENCER,
      variables: {
        proposalId: this.proposalId,
        paymentId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.router.navigate(['dashboard/payments']);
    });
  }
}
