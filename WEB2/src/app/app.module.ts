import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialModule } from './components/initial/initial.module';
import { MenuBarComponent } from './components/onboarding/menu-bar/menu-bar.component';
import { DialogsModule } from './components/dialogs/dialogs.module';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InitialModule,
    DialogsModule
  ],
  providers: [

  ],
  exports:[
    MenuBarComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
