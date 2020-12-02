import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
  import {Router} from '@angular/router';
@Component({
  selector: 'app-user-contactus',
  templateUrl: './user-contactus.component.html',
  styleUrls: ['./user-contactus.component.css']
})
export class UserContactusComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }
}
