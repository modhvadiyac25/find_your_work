import {Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './user/signup/signup.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {UserTakeworkComponent} from './user-takework/user-takework.component';
import {UserContactusComponent} from './user-contactus/user-contactus.component';
import {UserAboutusComponent} from './user-aboutus/user-aboutus.component';

import {AuthGuard} from './auth/auth.guard';

export const appRoutes : Routes =[
    {
        path:'signup',component:UserComponent,children : [{ path:'',component:SignupComponent}]
    },
    
    {
        path:'login',component:SignInComponent,children : [{ path:'',component:SignInComponent}]
    },
    {
        path:'userProfile',component:UserProfileComponent,canActivate:[ AuthGuard]
    },
    {
        path:'userHome',component:UserHomeComponent,canActivate:[ AuthGuard]
    },
    {
        path:'userTakework',component:UserTakeworkComponent,canActivate:[ AuthGuard]
    },
    {
        path:'userContactus',component:UserContactusComponent,canActivate:[ AuthGuard]
    },
    {
        path:'userAboutus',component:UserAboutusComponent,canActivate:[ AuthGuard]
    },
    {
        path:'',redirectTo:'/login',pathMatch:'full'
    }

];