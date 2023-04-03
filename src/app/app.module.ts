import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './componenets/auth/auth.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/auth/login/login.component';
import { RegisterComponent } from './componenets//auth/register/register.component';
import { SubmitComponent } from './componenets/submit/submit.component';
import { EssaysComponent } from './componenets/essays/essays.component';
import * as fromApp from './store/app.reducer'
import { AuthEffects } from './componenets/auth/store/auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SubmitComponent,
    EssaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
