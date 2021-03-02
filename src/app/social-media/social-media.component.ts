import { Component, OnInit } from '@angular/core';
import {AmazonLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
import {CHECKSOCIALAUTH, ADDSOCIALAUTH} from '../Apollo/queries';
import {Apollo} from 'apollo-angular';
import {HttpHeaders} from '@angular/common/http';
import {user} from '../constants';
import {ToastrService} from 'ngx-toastr';
class CheckSocialAuth {
  data: {
    socialAuthTokensConnection: {
      values: [{
          id
          google
          amazon
        }]
    };
  };
}
class SocialToken {
  amazon: {
    authToken
  };
  google: {
    authToken
    photoUrl
  };
  isValid() {
    return this.amazon.authToken !== null && this.google.authToken !== null;
  }
  constructor() {
    this.amazon = {
      authToken: null
    };
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
              private toastr: ToastrService
  ) {
    console.log('cons');
    this.token = new SocialToken();
  }
  user: SocialUser;
  loggedIn: boolean;
  token: SocialToken;
  addSocialAuthTokesToDataBase() {
    user.photoUrl = this.token.google.photoUrl;
    this.apollo.mutate({
      mutation: ADDSOCIALAUTH,
      variables: {
        amazon: this.token.amazon.authToken,
        google: this.token.google.authToken,
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
  ngOnInit() {
    console.log('onInit');
    this.authService.authState.subscribe((data: SocialUser) => {
      this.user = data;
      this.loggedIn = (user != null);
      console.log(user);
      if (this.loggedIn) {
        if (this.user.provider === 'AMAZON') {
          this.token.amazon.authToken = this.user.authToken;
          console.log('success message A');
          this.toastr.success('Amazon\'s Login success', 'Amazon Added');
        } else {
          this.token.google.authToken = this.user.authToken;
          this.token.google.photoUrl = this.user.photoUrl;
          console.log('success message G');
          this.toastr.success('Google\'s Login success', 'Google Added');
        }
      }
    });
  }
  onNext() {
    if (this.isValidToken()) {
      this.addSocialAuthTokesToDataBase();
      user.socialAuthToken = this.token;
      this.router.navigate(['dashboard']);
    }
  }
  signInWithGoogle(): void {
    const googleLoginOptions = {
      scope: 'https:
    };
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, googleLoginOptions);
  }
  signInWithAmazon(): void {
    const amazonLoginOptions = {
      scope: 'profile profile:user_id postal_code'
    };
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID, amazonLoginOptions);
  }
  isValidToken() {
    if (this.token === undefined) {
      return false;
    }
    return this.token.isValid();
  }
}
