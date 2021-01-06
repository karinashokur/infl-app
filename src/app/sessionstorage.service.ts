import {Inject, Injectable} from '@angular/core';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
const TOKEN_KEY = 'This is Token!!';
const ID_KEY = 'This is id';
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService) {}
  public storeJwtToken(token) {
    this.sessionStorage.set(TOKEN_KEY, token);
  }
  public getJwtToken() {
    return this.sessionStorage.get(TOKEN_KEY);
  }
  public hasJwtToken() {
    return this.sessionStorage.has(TOKEN_KEY);
  }
  public isLoggedIn() {
    return this.sessionStorage.has(TOKEN_KEY);
  }
  public logout() {
    if (this.isLoggedIn()) {
      this.sessionStorage.remove(TOKEN_KEY);
      this.sessionStorage.remove(ID_KEY);
    }
  }
  public storeId(id) {
    this.sessionStorage.set(ID_KEY, id);
  }
  public getId() {
    if (this.sessionStorage.has(ID_KEY)) {
      return this.sessionStorage.get(ID_KEY);
    }
    return -1;
  }
}
