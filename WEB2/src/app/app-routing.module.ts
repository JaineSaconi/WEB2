import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/initial/login/login.component';
import { RegisterComponent } from './components/initial/register/register.component';
import { ForgotPasswordComponent } from './components/initial/forgot-password/forgot-password.component';
import { LoginGuardService } from './services/login.guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'onboarding',
    canActivate: [LoginGuardService],
    loadChildren: () => import('./components/onboarding/onboarding.module').then(
      (m)=>m.OnboardingModule,
    )
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
