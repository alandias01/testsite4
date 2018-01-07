import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

import { HeroModule } from './hero/hero.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
        {path:'welcome', component: WelcomeComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'}        
      ]),
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
