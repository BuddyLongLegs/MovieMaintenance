import { Component } from '@angular/core';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss']
})
export class ActorPageComponent {
  data: Array<any> | null = null;
  
  constructor() { }

  async ngOnInit() {
    let res = await fetch("http://localhost:8000/actors/");
    if (res) {
      let r = await res.json();
      this.data = r.data;
    }
  }
}
