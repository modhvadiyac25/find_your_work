import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-takework',
  templateUrl: './user-takework.component.html',
  styleUrls: ['./user-takework.component.css']
})
export class UserTakeworkComponent implements OnInit {
  
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }
}
