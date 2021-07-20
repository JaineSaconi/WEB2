import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesRegisterComponent } from './components/classes-register/classes-register.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'classes-register',
    component: ClassesRegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
