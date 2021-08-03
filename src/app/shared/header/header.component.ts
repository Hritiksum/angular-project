import { Component, OnInit } from '@angular/core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // fontawesome: Tie the icon to the property in your component
  faigloo = faIgloo;
  logStatus:boolean = false;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authservice.login();
    this.logStatus=this.authservice.loggedIn;
  }
  logout(){
    this.authservice.logout();
    this.logStatus=this.authservice.loggedIn;
  }

}
