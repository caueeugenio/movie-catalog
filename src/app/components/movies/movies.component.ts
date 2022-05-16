import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { AddMovieModalComponent } from '../modal/add-movie-modal/add-movie-modal.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  // closeResult: string = '';
  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  openModal(movie: any) {
    movie = this.movies;
    // this.modalService.open(AddMovieModalComponent);
    const ref = this.modalService.open(AddMovieModalComponent);
    ref.componentInstance.teste = movie;

    ref.result.then(
      (yes) => {
        console.log(`ok`);
      },
      (cancel) => {
        console.log(`cancel`);
      }
    );
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

  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
