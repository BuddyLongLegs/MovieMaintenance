import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ActorCardComponent } from './actor-card/actor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviePageComponent,
    ActorPageComponent,
    HomePageComponent,
    MovieCardComponent,
    ActorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
