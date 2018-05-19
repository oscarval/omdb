import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { OmdbservicesService } from '../../services/omdbservices.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  param:string = "";
  movies:any[];

  constructor(
    private activateRoute:ActivatedRoute,
    private route:Router,
    private _ombdServices: OmdbservicesService) { 
      this.movies = this._ombdServices.movies;
    }

  ngOnInit() {
  }

  searchMovies(){
    this._ombdServices.getMovies(this.param)
          .subscribe(data =>{
            this.movies = data;
          });
  }

  viewDetailMovie(idMovie:string){
    this.route.navigate( ['/movie',idMovie] );
  }
}
