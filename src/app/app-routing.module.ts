import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OnboardingAComponent} from './register/onboarding-a/onboarding-a.component';
import {OnboardingBComponent} from './register/onboarding-b/onboarding-b.component';
import {OnboardingCComponent} from './register/onboarding-c/onboarding-c.component';
import {OnboardingDComponent} from './register/onboarding-d/onboarding-d.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SocialMediaComponent} from './social-media/social-media.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'register/onboardinga', component: OnboardingAComponent},
  {path : 'register/onboardingb', component: OnboardingBComponent},
  {path : 'register/onboardingc', component: OnboardingCComponent},
  {path : 'register/onboardingd', component: OnboardingDComponent},
  {path: 'social', component: SocialMediaComponent},
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
