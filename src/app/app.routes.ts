import { RouterModule, Routes } from '@angular/router';
import {ListmoviesComponent } from './components/listmovies/listmovies.component';
import {DetaillMovieComponent } from './components/detaill-movie/detaill-movie.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {UserProfileComponent } from './components/user-profile/user-profile.component';

// Routes for my app
const APP_ROUTES: Routes = [
  { path: 'home', component: ListmoviesComponent },
  { path: 'movie/:id', component: DetaillMovieComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
