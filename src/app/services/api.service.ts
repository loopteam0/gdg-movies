import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2EwN2ZmOThhYWViMjA2NWViZWUzMjFiZjA4ZDIzYSIsInN1YiI6IjViNGE4YTU4YzNhMzY4MjNkZTAxYWMwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8V0DHrLl2gTaibAg93kg0Lt7ldmd7PpjSaop6Uo4y14'
    }
  }

  constructor(private api: HttpClient) { }

  getAllMovies() {
    return this.api.get('https://api.themoviedb.org/3/movie/now_playing', this.httpOptions)
  }

  getMovieList() {
    return this.api.get<any>('https://api.themoviedb.org/3/genre/movie/list', this.httpOptions);
  }
}
