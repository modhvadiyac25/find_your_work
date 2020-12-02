import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public serverErrorMsg:string;
  model={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(public userservice : UserService,private router: Router) { }

  ngOnInit() {
  }

  onLogin(form : NgForm){
   return this.userservice.login(form.value).subscribe(
      res=>{
        
        this.userservice.setToken(res['token']);
        this.router.navigateByUrl('/userProfile');
    },
    err=>{
      alert("Username or Password may incorrect !!");
      this.serverErrorMsg=err.error.messge;

    }
    );

  }
 
  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }
}

