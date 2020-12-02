import { Component, OnInit } from '@angular/core';

import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails;
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userservice.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
      },
      err=>{

      }
    );
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }

}
