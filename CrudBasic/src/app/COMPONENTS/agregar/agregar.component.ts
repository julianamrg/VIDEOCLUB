import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../SERVICES/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  movie: Movie = {
    mov_id: '',
    mov_title: '',
    mov_year: '',
    mov_time: 0,
    mov_lang: '',
    mov_dt_rel: '2021-09-27',
    mov_rel_country: '',
  };
  constructor(private MovieService: MovieService, private router: Router) {}

  ngOnInit(): void {}

  increase() {
    //  delete this.movie.mov_id;

    this.MovieService.addMovie(this.movie).subscribe();
    this.router.navigate(['/inicio']);
  }
}
