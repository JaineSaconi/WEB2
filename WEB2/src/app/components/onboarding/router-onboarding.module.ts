import { ReportComponent } from './report/report.component';
import { OnboardingComponent } from './onboarding.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesRegisterComponent } from './classes-register/classes-register.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'classes/classes-register',
    component: ClassesRegisterComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule { }
