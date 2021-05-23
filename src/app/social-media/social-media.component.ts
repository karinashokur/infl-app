import { Component, OnInit } from '@angular/core';
import {AmazonLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
import {Apollo} from 'apollo-angular';
import {HttpHeaders} from '@angular/common/http';
import {user} from '../constants';
import {ToastrService} from 'ngx-toastr';
import {RegisterServiceService} from '../register/register-service.service';
import {DashboardService} from '../dashboard/dashboard.service';
export class SocialToken {
  google: {
    authToken
    photoUrl
  };
  isValid() {
    return this.google.authToken !== null;
  }
  constructor() {
    this.google = {
      authToken: null,
      photoUrl: null
    };
  }
}
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  constructor(private authService: SocialAuthService,
              private router: Router,
              private localstorageService: LocalstorageService,
              private apollo: Apollo,
              private toastr: ToastrService,
              private registerServiceService: RegisterServiceService,
              private dashboardService: DashboardService
  ) {
    console.log('cons');
    this.token = new SocialToken();
  }
  user: SocialUser;
  loggedIn: boolean;
  token: SocialToken;
  ngOnInit() {
    console.log('onInit');
    this.authService.authState.subscribe((data: SocialUser) => {
      this.user = data;
      this.loggedIn = (user != null);
      console.log(user);
      if (this.loggedIn) {
        this.token.google.authToken = this.user.authToken;
        this.token.google.photoUrl = this.user.photoUrl;
        console.log('success message G');
        this.toastr.success('Google\'s Login success', 'Google Added');
      }
    });
  }
  onNext() {
    console.log(this.token);
    if (this.isValidToken()) {
      this.registerServiceService.submitCreateInfluencer(this.token);
      user.socialAuthToken = this.token;
    }
  }
  signInWithGoogle(): void {
    const googleLoginOptions = {
      scope: 'https:
        'https:
        'https:
    };
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, googleLoginOptions);
  }
  isValidToken() {
    if (this.token === undefined) {
      return false;
    }
    return this.token.isValid();
  }
}
