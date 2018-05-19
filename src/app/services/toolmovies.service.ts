import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';

@Injectable()
export class ToolmoviesService {

  constructor(private _userservices:UsersService) { }


  markFavorite(idmovie:string){
    let userdata = this._userservices.userLogin;
    let favorites = (userdata.favorites) ? userdata.favorites : [];
    favorites.push(idmovie);
    userdata.favorites = favorites;
    this._userservices.updateUser(userdata);
  }

  delFavorite(idmovie:string){
    let userdata = this._userservices.userLogin;
    let favorites = (userdata.favorites) ? userdata.favorites : [];
    let index = favorites.indexOf(idmovie);
    if (index > -1) {
      favorites.splice(index, 1);
      userdata.favorites = favorites;
      this._userservices.updateUser(userdata);
    }
    return true;
  }

}
