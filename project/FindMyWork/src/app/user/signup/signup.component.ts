import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

import { UserService } from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [UserService]
})
export class SignupComponent implements OnInit {
  public successmsg:boolean;
  public serverErrormsg:string;
  public cpassword='';
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitSignup(form : NgForm){
    console.log("in f" + form.name);
      this.userservice.postUserSignup(form.value).subscribe(
      
        res =>{ this.successmsg=true;
          alert("sign up successfully !!");
        setInterval(()=>this.successmsg=false,400);
        this.resetForm(form);
        },
        err=> {
          alert("error" + err.value);
          if(err.status=422){
            this.serverErrormsg = err.error.join('<br/>');
          }else{
            this.serverErrormsg="Some thing wents wrong !!";
          }
        }
   
      );

  }

  resetForm(form : NgForm){
    this.userservice.selectUser={
      firstname:'',
      lastname: '',
      mobile_no: 0,
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrormsg='';
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }

}
