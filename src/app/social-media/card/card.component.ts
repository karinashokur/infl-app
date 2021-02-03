import {Component, Input, OnInit} from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private authService: SocialAuthService) { }
  @Input()
  imgSrc: string;
  @Input()
  heading: string;
  @Input()
  onSubmit;
  ngOnInit(): void {
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
