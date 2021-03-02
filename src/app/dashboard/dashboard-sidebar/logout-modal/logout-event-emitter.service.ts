import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogoutEventEmitterService {
  constructor() { }
  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;
  onFirstComponentButtonClick() {
    this.invokeFirstComponentFunction.emit();
  }
}
