import { Component, OnInit } from '@angular/core';
import {AmazonLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
import {CHECKSOCIALAUTH, ADDAMAZONAUTH, ADDGOOGLEAUTH} from '../Apollo/queries';
import {Apollo} from 'apollo-angular';
import {HttpHeaders} from '@angular/common/http';
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
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  constructor(private authService: SocialAuthService,
              private router: Router,
              private localstorageService: LocalstorageService,
              private apollo: Apollo
  ) { }
  user: SocialUser;
  loggedIn: boolean;
  isGoogleSignIn: boolean;
  addGoogleDataToDatabase() {
    this.apollo.mutate({
      mutation: ADDGOOGLEAUTH,
      variables: {
        google: this.user.authToken,
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
  private addAmazonDataToDatabase() {
    this.apollo.mutate({
      mutation: ADDAMAZONAUTH,
      variables: {
        amazon: this.user.authToken,
        id: this.localstorageService.getId()
      },
      context: {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.localstorageService.getJwtToken()),
      }
    }).subscribe();
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.addGoogleDataToDatabase();
      }
    });
  }
  onNext() {
    this.router.navigate(['dashboard/influencer']);
  }
  signInWithGoogle(): void {
    this.isGoogleSignIn = true;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }
}
