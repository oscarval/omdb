import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  constructor(
    private _userServices: UsersService
  ) { 

    this.isLogin = this._userServices.isLogin();

  }

  ngOnInit() {
  }

}
