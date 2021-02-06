import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HomeSelectorComponent } from './home/home-selector/home-selector.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { OnboardingAComponent } from './register/onboarding-a/onboarding-a.component';
import {MatRadioModule} from '@angular/material/radio';
import { OnboardingBComponent } from './register/onboarding-b/onboarding-b.component';
import { OnboardingCComponent } from './register/onboarding-c/onboarding-c.component';
import { OnboardingDComponent } from './register/onboarding-d/onboarding-d.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CardComponent } from './social-media/card/card.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import {DashboardModule} from './dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSelectorComponent,
    LoginComponent,
    RegisterComponent,
    OnboardingAComponent,
    OnboardingBComponent,
    OnboardingCComponent,
    OnboardingDComponent,
    DashboardComponent,
    SocialMediaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    MatRadioModule,
    SocialLoginModule,
    DashboardModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '126404175701-bkfa3lpoo3omt5o8e261s38rq6gsslph.apps.googleusercontent.com'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
