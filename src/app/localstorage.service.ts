import {Inject, Injectable} from '@angular/core';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
const TOKEN_KEY = 'This is Token!!';
const ID_KEY = 'This is id';
const ID_USER_TYPE = 'This is user Type'
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService) {}
  public storeJwtToken(token) {
    this.localStorage.set(TOKEN_KEY, token);
  }
  public getJwtToken() {
    return this.localStorage.get(TOKEN_KEY);
  }
  public hasJwtToken() {
    return this.localStorage.has(TOKEN_KEY);
  }
  public isLoggedIn() {
    return this.localStorage.has(TOKEN_KEY);
  }
  public logout() {
    if (this.isLoggedIn()) {
      this.localStorage.remove(TOKEN_KEY);
      this.localStorage.remove(ID_KEY);
    }
  }
  public storeId(id) {
    this.localStorage.set(ID_KEY, id);
  }
  public getId() {
    if (this.localStorage.has(ID_KEY)) {
      return this.localStorage.get(ID_KEY);
    }
    return -1;
  }
  public setUserType(userType) {
    this.localStorage.set(ID_USER_TYPE, userType);
  }
  public getUserType() {
    this.localStorage.get(ID_USER_TYPE);
  }
}
