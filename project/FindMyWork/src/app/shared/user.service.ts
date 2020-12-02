import { Injectable } from '@angular/core';

import { User } from './user.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectUser: User = {
    firstname: '',
    lastname: '',
    mobile_no : 0,
    email:'',
    password: ''
  };

  noAuthHeader = {headers : new HttpHeaders({'NoAuth':'true'})};

  constructor(private http:HttpClient) { }

  //http methods
  postUserSignup(user :User): Observable<User>{
   return this.http.post<User>(environment.apiBaseUri + '/register',user,this.noAuthHeader);
  }

  login(authCredentials){
   return this.http.post(environment.apiBaseUri + '/authenticate',authCredentials,this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUri + '/userProfile');
  }

//helper method
  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayLoad = atob(token.split('.')[1]);
      return JSON.parse(userPayLoad);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayLoad= this.getUserPayload();
    if(userPayLoad){
      return userPayLoad.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  }
}
