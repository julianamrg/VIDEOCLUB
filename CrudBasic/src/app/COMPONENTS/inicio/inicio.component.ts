import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../SERVICES/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  // variable
  ListarMovie: any = [];

  constructor(private MovieService: MovieService, private router: Router) {
    // Initialization inside the constructor
    this.ListarMovie = [];
  }

  ngOnInit(): void {
    this.listMovie();
  }

  listMovie() {
    this.MovieService.getMovie().subscribe(
      (res) => {
        console.log(res);
        this.ListarMovie = <any>res;
      },
      (err) => console.log(err)
    );
  }

  eliminar(id: string) {
    this.MovieService.deleteMovie(id).subscribe(
      (res) => {
        console.log('equipo eliminado');
        this.listMovie();
      },
      (err) => console.log(err)
    );
  }

  // Edit movie

  editar(id: string) {
    this.router.navigate(['/edit/' + id]);
  }
}
