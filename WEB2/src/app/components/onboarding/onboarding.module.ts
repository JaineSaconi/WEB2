import { ReportComponent } from './report/report.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesRegisterComponent } from './classes-register/classes-register.component';
import { MarkdownModule } from 'ngx-markdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnboardingRoutingModule } from './router-onboarding.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    ProjectComponent,
    TeamComponent,
    ContactComponent,
    ClassesComponent,
    ClassesRegisterComponent,
    ReportComponent,
   ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class OnboardingModule { }
