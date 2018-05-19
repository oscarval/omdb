import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbservicesService {

  movies:any[] = [];
  movie:any = {};
  apikeyParams:string = "?apikey=b007435d";
  urlSearch:string = "http://www.omdbapi.com/";


  constructor(private http:Http) { }

  getMovies(term:string){
    let url = this.urlSearch + this.apikeyParams + "&s=" + term;
    return this.http.get(url)
                .map( res =>{
                  this.movies = res.json().Search;
                  return res.json().Search;
                });
  }

  getMovie(idMovie:string){
    let url = this.urlSearch + this.apikeyParams + "&i=" + idMovie;
    return this.http.get(url)
                .map( res =>{
                  this.movie = res.json();
                  return res.json();
                });
  }

}
