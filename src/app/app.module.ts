import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListmoviesComponent } from './components/listmovies/listmovies.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Services
import { OmdbservicesService } from './services/omdbservices.service';

@NgModule({
  declarations: [
    AppComponent,
    ListmoviesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    OmdbservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
