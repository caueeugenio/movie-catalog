import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.css'],
})
export class AddMovieModalComponent implements OnInit {
  movieName: any;
  imageMovie: any;

  movies = [];
  constructor(
    public modal: NgbActiveModal,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies();
  }

  getAllMovies() {
    this.moviesService.getMovies().subscribe(
      (data) => {
        this.movies = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // listenMovie(event: any) {
  //   this.movieName = event.target.value;
  // }
  // listenUrl(event: any) {
  //   this.imageMovie = event.target.value;
  // }
  addMovie() {
    const body = {

      title: this.movieName,
      url: this.imageMovie,
    };
    this.moviesService.addMovies(body).subscribe((data) => {
    window.location.reload();


      this.modal.close();
    });
  }
}
