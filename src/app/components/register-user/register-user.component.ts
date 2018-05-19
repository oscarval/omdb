import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userdata:any;
  message:string = "";
  constructor(
    private _userServices: UsersService
  ) { }

  ngOnInit() {
  }

  registerUser(){
    if(this._userServices.registerUser(this.userdata)){

    }else{
      this.message = "Already exist user with this email. Try again please"
    }
  }

}
