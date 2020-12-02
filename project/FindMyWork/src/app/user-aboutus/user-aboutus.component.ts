import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-user-aboutus',
  templateUrl: './user-aboutus.component.html',
  styleUrls: ['./user-aboutus.component.css']
})
export class UserAboutusComponent implements OnInit {

 
  
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userservice.deleteToken();
    this.router.navigateByUrl("/login");
  }
}
