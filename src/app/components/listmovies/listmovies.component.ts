import { Component, OnInit } from '@angular/core';
import { OmdbservicesService } from '../../services/omdbservices.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  param:string = "";
  movies:any[];

  constructor(private _ombdServices: OmdbservicesService) { }

  ngOnInit() {
  }

  searchMovies(){
    this._ombdServices.getMovies(this.param)
          .subscribe(data =>{
            console.log(data);
            this.movies = data;
          });
  }

  viewDetailMovie(idMovie:string){
    //idMovie = "tt1285016";
    this._ombdServices.getMovie(idMovie)
          .subscribe(data =>{
            console.log(data);
            //this.movies = data;
          });
  }
}
