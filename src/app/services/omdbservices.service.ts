import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbservicesService {

  // variables
  movies:any[] = [];
  movie:any = {};
  apikeyParams:string = "?apikey=b007435d";
  urlSearch:string = "http://www.omdbapi.com/";


  constructor(private http:Http) { }

  // Get data of search movie by title
  getMovies(term:string){
    let url = this.urlSearch + this.apikeyParams + "&s=" + term;
    return this.http.get(url)
                .map( res =>{
                   // save de data in variable of services and return
                  this.movies = res.json().Search;
                  return res.json().Search;
                });
  }

  // get detail movie by id
  getMovie(idMovie:string){
    let url = this.urlSearch + this.apikeyParams + "&i=" + idMovie;
    return this.http.get(url)
                .map( res =>{
                   // save de data in variable of services and return
                  this.movie = res.json();
                  return res.json();
                });
  }

}
