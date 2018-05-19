import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  urlApi:string = "https://reqres.in/api/";

  constructor(private http:Http) { 
  }

  registerUser(data){
    data = {
        "name": "alexis",
        "lastname": "valdez",
        "avatar": "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18355.png",
        "email": "prueba@gmail.com"
        
    };
    localStorage.setItem(data.email,JSON.stringify(data));
    return true;
  }

  loginUser(email,password){
    let user  = JSON.parse(localStorage.getItem(email));
    if(user && user.password == password){
      return true;
    }
    return false;
  }

}
