import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  /* This component simulate a register, login and logout user using localstorage */

  userLogin:any;
  constructor() {
    this.isLogin ();
  }

  // know if exist user login
  isLogin(){
    let login = JSON.parse(localStorage.getItem("login"));
    if(login && login != ""){
      this.userLogin = login
      return true;
    }
    return false;
  }

  // register user in data base
  registerUser(data){
    localStorage.setItem(data.email,JSON.stringify(data));
    localStorage.setItem("login",JSON.stringify(data));
    return true;
  }

  // login user of data base
  loginUser(email,password){
    let user  = JSON.parse(localStorage.getItem(email));
    if(user && user.password == password){
      return true;
    }
    return false;
  }

  // logout of user
  logout(){
    localStorage.setItem("login","");
  }

  updateUser(data){
    localStorage.setItem(data.email,JSON.stringify(data));
    localStorage.setItem("login",JSON.stringify(data));
    this.userLogin = data;
    return true;
  }
}
