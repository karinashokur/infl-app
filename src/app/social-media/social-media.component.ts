import { Component, OnInit } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {Router} from '@angular/router';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  constructor(private authService: SocialAuthService,
              private router: Router) { }
  user: SocialUser;
  loggedIn: boolean;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  onNext() {
    this.router.navigate(['dashboard']);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
