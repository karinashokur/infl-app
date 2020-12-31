import {Inject, Injectable} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
const STORAGE_KEY = 'pure-awesomeness';
export class LocalstorageService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}
}
