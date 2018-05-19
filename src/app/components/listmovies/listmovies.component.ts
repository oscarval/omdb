import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { OmdbservicesService } from '../../services/omdbservices.service';
import { UsersService } from '../../services/users.service';
import { ToolmoviesService } from '../../services/toolmovies.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  param:string = "";
  movies:any[];
  isLogin:any;
  favorites:any[];

  constructor(
    private activateRoute:ActivatedRoute,
    private route:Router,
    private _ombdServices: OmdbservicesService,
    private _userServices: UsersService,
    private _toolsMovies: ToolmoviesService
  ) {
      this.movies = this._ombdServices.movies;
      this.isLogin = this._userServices.isLogin();
      if(this.isLogin){
        this.favorites = this._userServices.userLogin.favorites;
      }
    }

  ngOnInit() {
  }

  searchMovies(){
    this._ombdServices.getMovies(this.param)
          .subscribe(data =>{
            this.movies = data;
            this.markFavorites();
          });
  }

  viewDetailMovie(idMovie:string){
    this.route.navigate( ['/movie',idMovie] );
  }

  markFavorites(){
    if(this.isLogin && this.favorites){
      for(let f of this.movies){
        if(this.favorites.indexOf(f.imdbID) != -1 ){
          f.favorite = true;
        }
      }
    }
  }

  markFavoriteUser(idmovie:string){
    this._toolsMovies.markFavorite(idmovie);
    let movieSelect:any = this.movies.filter(
      item => item.imdbID.toLowerCase() == idmovie.toLowerCase()
    )
    //console.log(movieSelect);
    movieSelect[0].favorite = true;
  }

}
