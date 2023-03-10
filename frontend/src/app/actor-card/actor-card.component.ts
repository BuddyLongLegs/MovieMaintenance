import { Actor } from './../types/actor';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-actor-card]',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent {
  @Input() actor: Actor = {};
  @Input() index: number = 0;

  constructor() { }
}
