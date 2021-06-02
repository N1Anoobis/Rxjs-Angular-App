import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie, movies } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id!: string | null;
  movie?: Movie;
  movieSub$!: Subscription;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
        this.navbarService.title.next(movie.name);
      }
    });
  }

  ngOnDestroy() {
    this.movieSub$?.unsubscribe();
  }
}
