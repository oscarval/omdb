import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { ListmoviesComponent } from './components/listmovies/listmovies.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Services
import { OmdbservicesService } from './services/omdbservices.service';
import { DetaillMovieComponent } from './components/detaill-movie/detaill-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListmoviesComponent,
    NavbarComponent,
    DetaillMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    OmdbservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
