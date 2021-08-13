import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/initial/login/login.component';
import { RegisterComponent } from './components/initial/register/register.component';
import { ForgotPasswordComponent } from './components/initial/forgot-password/forgot-password.component';
import { HomeComponent } from './components/onboarding/home/home.component';
import { ProjectComponent } from './components/onboarding/project/project.component';
import { TeamComponent } from './components/onboarding/team/team.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: LoginComponent
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: '',
    loadChildren: () => import('./components/onboarding/onboarding.module').then(
      (m)=>m.OnboardingModule,
    ), component: OnboardingComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
