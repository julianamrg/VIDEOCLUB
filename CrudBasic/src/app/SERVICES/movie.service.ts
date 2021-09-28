import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = '/api';
  constructor(private http: HttpClient) {}

  //In this part we can get movie
  getMovie() {
    return this.http.get(this.url);
  }

  //to get a movie for its id
  getOneMovie(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  //to add a movie
  addMovie(movie: Movie) {
    return this.http.post(this.url, movie);
  }

  //to delete a movie
  deleteMovie(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  // edit a movie
  editMovie(id: string, movie: Movie) {
    return this.http.put(this.url + '/' + id, movie);
  }
}

export interface Movie {
  mov_id: string;
  mov_title?: string;
  mov_year?: string;
  mov_time?: number;
  mov_lang?: string;
  mov_dt_rel?: string;
  mov_rel_country?: string;
}
