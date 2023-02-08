import { Component, Input } from '@angular/core';
import { Movie } from '../types/movie';

@Component({
  selector: '[app-movie-card]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: Movie = {};
  @Input() index: number = 0;
  @Input() like: any = () => {};
  @Input() dislike: any = () => {};

  constructor(){}
}
