import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EndCampaignModalService {
  constructor() { }
  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;
  onFirstComponentButtonClick(campaignId) {
    this.invokeFirstComponentFunction.emit(campaignId);
  }
}
