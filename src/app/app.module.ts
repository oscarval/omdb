import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { APP_ROUTING } from './app.routes';

// Services
import { OmdbservicesService } from './services/omdbservices.service';
import { UsersService } from './services/users.service';
import { ToolmoviesService } from './services/toolmovies.service';

// Components
import { AppComponent } from './app.component';
import { ListmoviesComponent } from './components/listmovies/listmovies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetaillMovieComponent } from './components/detaill-movie/detaill-movie.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    ListmoviesComponent,
    NavbarComponent,
    DetaillMovieComponent,
    RegisterUserComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    OmdbservicesService,
    UsersService,
    ToolmoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
