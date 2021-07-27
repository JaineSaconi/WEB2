import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ProjectComponent } from './components/project/project.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { ClassesComponent } from './components/classes/classes.component';
import { ClassesRegisterComponent } from './components/classes-register/classes-register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestServiceService } from './services/request-service.service';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ContentComponent,
    ProjectComponent,
    TeamComponent,
    LoginComponent,
    ContactComponent,
    ClassesComponent,
    ClassesRegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
