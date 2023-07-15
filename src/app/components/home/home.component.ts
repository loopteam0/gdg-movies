import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


export interface IGenre {
  id: string
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = [];

  genres: IGenre[] = []


  constructor(private api: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.callApiMethod();

    this.api.getMovieList().subscribe((response: any) => {
      this.genres = response.genres
    })
  }


  callApiMethod() {
    this.api.getAllMovies().subscribe((response: any) => {
      console.log(response);
      this.movies = response.results;
    }, error => {
      console.log(error);
    })
  }
}
