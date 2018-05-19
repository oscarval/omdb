import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { OmdbservicesService } from '../../services/omdbservices.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any = {};
  movies:any = [];
  constructor(
    private route:Router,
    private _userServices: UsersService,
    private _ombdServices: OmdbservicesService,
  ) { 
    this.user = this._userServices.userLogin;
    this.getFavoritesMovies();
  }

  ngOnInit() {
  }

  getFavoritesMovies(){
    if(this.user.favorites){
      for(let id of this.user.favorites){
        //console.log(id);
        this._ombdServices.getMovie(id).subscribe(data=>{
          this.movies.push(data);
        });
      }
    }
  }

  logout(){
    this._userServices.logout();
    this.route.navigate( ['/home'] );
  }

}
