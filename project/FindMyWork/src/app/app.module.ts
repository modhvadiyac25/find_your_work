import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import {appRoutes} from './routers';

import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import {AuthGuard} from './auth/auth.guard';
import { UserService } from './shared/user.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent} from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserTakeworkComponent } from './user-takework/user-takework.component';
import { UserContactusComponent } from './user-contactus/user-contactus.component';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    UserProfileComponent,
    SignInComponent,
    UserHomeComponent,
    UserTakeworkComponent,
    UserContactusComponent,
    UserAboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
