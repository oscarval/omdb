import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ActivatedRoute , Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userdata:any = {};
  dataLogin:any = {};
  message:string = "";
  messageLogin:string = "";
  constructor(
    private activateRoute:ActivatedRoute,
    private route:Router,
    private _userServices: UsersService
  ) { }

  ngOnInit() {
  }

  registerUser(){
    if(this.userdata.email && this.userdata.email != "" && this.userdata.password && this.userdata.password != ""
  ){
      if(this._userServices.registerUser(this.userdata)){
        this.goProfileUser();
      }else{
        this.message = "Already exist user with this email. Try again please"
      }
    }else{
      this.message = "Please, complete fields required";
    }
  }

  login(){
    if(this.dataLogin.email && this.dataLogin.email != "" && this.dataLogin.password && this.dataLogin.password != ""
    ){
      if(this._userServices.loginUser(this.dataLogin.email,this.dataLogin.password)){
        this.goProfileUser();
      }else{
        this.messageLogin = "Email or passwrod incorrect";
      }
    }else{
      this.messageLogin = "Please, complete fields required";
    }
  }

  goProfileUser(){
    this.route.navigate( ['/user'] );
  }

}
