import { RouterModule, Routes } from '@angular/router';
import {ListmoviesComponent } from './components/listmovies/listmovies.component';
import {DetaillMovieComponent } from './components/detaill-movie/detaill-movie.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: ListmoviesComponent },
  { path: 'movie/:id', component: DetaillMovieComponent },
//   { path: 'heroes', component: HeroesComponent },
//   { path: 'heroe/:id', component: HeroeComponent },
//   { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
