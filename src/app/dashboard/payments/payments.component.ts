import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../localstorage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ExternalScriptService} from './external-script.service';
import {get} from 'scriptjs';
import {amazonPayUrl} from '../../constants';
import {Apollo} from 'apollo-angular';
import {COMPLETEPAYMENT, GETFROMPAYMENT, GETTOPAYMENT} from '../../Apollo/queries';
import {HttpHeaders} from '@angular/common/http';
import {ApolloQueryResult} from 'apollo-client';
import {ToastrService} from 'ngx-toastr';
class Payments {
  payments: [Payment];
}
class Payment {
  id;
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
from: {
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
              private apollo: Apollo,
              private tostr: ToastrService) {
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
      console.log(data.data);
      this.duePayments = [];
      this.completedPayments = [];
      data.data.payments.forEach((payment: Payment) => {
        console.log(payment);
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
      console.log(data.data);
      this.receivedPayments = [];
      data.data.payments.forEach((payment: Payment) => {
        this.receivedPayments.push({...payment});
      });
    });
  }
  paymentComplete(paymentId: Payment) {
    console.log(paymentId);
    this.apollo.mutate({
      mutation: COMPLETEPAYMENT,
      variables: {
        id: paymentId
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).toPromise().then((data) => {
      this.tostr.success('Thanks for your support', 'Payment completed');
      this.router.navigate(['dashboard/proposal']);
    });
  }
}
