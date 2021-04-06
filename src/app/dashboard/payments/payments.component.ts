import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ExternalScriptService} from './external-script.service';
import {get} from 'scriptjs';
import {amazonPayUrl} from '../../constants';
import {Apollo} from 'apollo-angular';
import {GETFROMPAYMENT, GETTOPAYMENT} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ApolloQueryResult} from 'apollo-client';
class Payments {
  payments: [Payment];
}
class Payment {
  payment_status: {
    id
  };
  amount;
  proposal: {
  campaignEndDate
    campaignName
  non_profit: {
  id
  non_profit: {
  firstName
  lastName
  organisation
}
}
influencer: {
  id
  influencer: {
    firstName
    lastName
  }
}
sponsor: {
  id
  sponsor: {
    firstName
    lastName
    organisation
  }
}
};
to: {
  id
};
}
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private externalScriptService: ExternalScriptService,
              private localstorageService: LocalstorageService,
              private router: Router,
              private apollo: Apollo) {
    get(amazonPayUrl, () => {
      console.log('loaded');
      window.onAmazonLoginReady = function() {
        amazon.Login.setClientId('amzn1.application-oa2-client.d627327cd6f749f3846a6b57f69688be');
      };
      window.onAmazonPaymentsReady = function() {
        showButton();
      };
      function showButton() {
        let authRequest;
        new OffAmazonPayments.Button('AmazonPayButton', 'A2S2XWN7B3EK8I', {
          type:  'PwA',
          color: 'Gold',
          size:  'medium',
          authorization() {
            const loginOptions = {scope: 'profile payments:widget payments:shipping_address',
              popup: true};
            authRequest = amazon.Login.authorize (loginOptions,
              '/dashboard/checkout');
          }
        });
      }
    });
  }
  duePayments: Payment[];
  completedPayments: Payment[];
  receivedPayments: Payment[];
  ngOnInit(): void {
    if (this.localstorageService.getUserType() === '1') {
    } else if (this.localstorageService.getUserType() === '2') {
    } else {
    }
    this.apollo.mutate({
      mutation: GETFROMPAYMENT,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<Payments>) => {
      this.duePayments = [];
      this.completedPayments = [];
      data.data.payments.forEach((payment: Payment) => {
        if (payment.payment_status.id === '2') {
          this.duePayments.push({...payment});
        } else {
          this.completedPayments.push({...payment});
        }
      });
    });
    this.apollo.mutate({
      mutation: GETTOPAYMENT,
      variables: {
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data: ApolloQueryResult<Payments>) => {
      this.receivedPayments = [];
      data.data.payments.forEach((payment: Payment) => {
        this.receivedPayments.push({...payment});
      });
    });
  }
}
