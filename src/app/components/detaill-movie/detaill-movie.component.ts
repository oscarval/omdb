import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OmdbservicesService } from '../../services/omdbservices.service';


@Component({
  selector: 'app-detaill-movie',
  templateUrl: './detaill-movie.component.html',
  styleUrls: ['./detaill-movie.component.css']
})
export class DetaillMovieComponent implements OnInit {
  movie:any = {};

  constructor(
    private activateRoute:ActivatedRoute,
    private _ombdServices: OmdbservicesService,
    private _location: Location
  ) { 
    this.activateRoute.params.subscribe( params =>{
      this._ombdServices.getMovie(params["id"]).subscribe(data=>{
        console.log(data);
        this.movie = data;
      });
  });
  }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
