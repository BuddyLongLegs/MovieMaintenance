import { HomePageComponent } from './home-page/home-page.component';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movie', component: MoviePageComponent },
  { path: 'actor', component: ActorPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
