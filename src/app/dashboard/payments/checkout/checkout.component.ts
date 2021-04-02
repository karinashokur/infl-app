import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {get} from 'scriptjs';
import {amazonPayUrl} from '../../../constants';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const a = this.activatedRoute.snapshot.queryParamMap.get('access_token');
    console.log(a);
    get(amazonPayUrl, () => {
      new OffAmazonPayments.Widgets.AddressBook({
        sellerId: 'A2S2XWN7B3EK8I',
        onOrderReferenceCreate(orderReference) {
          orderReference.getAmazonOrderReferenceId();
        },
        onAddressSelect(orderReference) {
        },
        design: {
          designMode: 'responsive'
        },
        onReady(orderReference) {
        },
        onError(error) {
          console.log(error.getErrorCode() + ': ' + error.getErrorMessage());
        }
      }).bind('addressBookWidgetDiv');
    });
    get(amazonPayUrl, () => {
      new OffAmazonPayments.Widgets.Wallet({
      sellerId: 'A2S2XWN7B3EK8I',
      onPaymentSelect(orderReference) {
      },
      design: {
        designMode: 'responsive'
      },
      onError(error) {
        console.log(error.getErrorCode() + ': ' + error.getErrorMessage());
      }
    }).bind('walletWidgetDiv');
    });
  }
}
