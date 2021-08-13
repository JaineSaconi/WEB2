import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OnboardingComponent } from './onboarding.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesRegisterComponent } from './classes-register/classes-register.component';
import { MarkdownModule } from 'ngx-markdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingRoutingModule } from './router-onboarding.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    ProjectComponent,
    TeamComponent,
    ContactComponent,
    ClassesComponent,
    ClassesRegisterComponent,
   ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MarkdownModule.forRoot(),
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class OnboardingModule { }
