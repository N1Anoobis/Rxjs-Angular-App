import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] | undefined;
  movies$: Observable<Movie[]> = this.movieService.getMovies();
  constructor(private movieService: MovieService,
    private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarService.title.next('MovieNight')
  }

}
