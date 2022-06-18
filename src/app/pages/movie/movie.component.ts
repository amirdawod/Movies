import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Credits, Image, Movie, Video } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieVideos: Video[] = [];
  movieImages: Image | null = null;
  movieCredits: Credits | null = null;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getVideos(id);
      this.getImages(id);
      this.getCredits(id);
    });
  }
  ngOnDestroy(): void {
    console.log('Component destroyed');
  }

  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getVideos(id: number) {
    this.moviesService.getVideos(id).subscribe((vid) => {
      this.movieVideos = vid;
      console.log(vid);
    });
  }

  getImages(id: number) {
    this.moviesService.getImages(id).subscribe((img) => {
      this.movieImages = img;
    });
  }
  getCredits(id: number) {
    this.moviesService.getCredits(id).subscribe((credit) => {
      this.movieCredits = credit;
    });
  }
}
