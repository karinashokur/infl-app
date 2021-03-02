import { Injectable } from '@angular/core';
import {user} from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class DashboardSidebarService {
  constructor() { }
  getUser() {
    return {
      imgSrc: user.photoUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      position: user.position,
      companyName: user.companyName,
      userId: user.id,
    };
  }
}
