import { Component } from '@angular/core';
import { Movie } from '../types/movie';

async function fetchData(sortBy: string, order: boolean) {
  let res = await fetch("http://localhost:8000/movies/?sort_by=" + sortBy + "&order=" + (order ? "asc" : "desc"));
  if (res) {
    let r = await res.json();
    return r.data;
  }
}

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent {
  data: Array<Movie> | null = null;
  sortBy: string = "title";
  order: boolean = true;

  constructor() { }

  async ngOnInit() { 
    this.data = await fetchData(this.sortBy, this.order);
  }

  async onChange(field: any) {
    this.data = null;
    if (field === this.sortBy) {
      this.order = !this.order;
    } else {
      this.sortBy = field;
      this.order = true;
    }
    this.data = await fetchData(this.sortBy, this.order);
  }
  
  like = async (movieid: number)=> {
    let res = await fetch("http://localhost:8000/upvote/"+movieid+"/");
    if (res) {
      this.data!.forEach((movie) => {
        if (movie.movieid === movieid) {
          movie.upvotes! += 1;
        }
      })
    }
  }
  dislike = async (movieid: number)=> {
    let res = await fetch("http://localhost:8000/downvote/"+movieid+"/");
    if (res) {
      this.data!.forEach((movie) => {
        if (movie.movieid === movieid) {
          movie.downvotes! += 1;
        }
      })
    }
  }
}
