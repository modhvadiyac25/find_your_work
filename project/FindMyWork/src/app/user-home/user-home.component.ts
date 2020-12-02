import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
  import {Router} from '@angular/router';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }

}
