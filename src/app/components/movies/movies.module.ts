import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieModalComponent } from '../modal/add-movie-modal/add-movie-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgbModule

  ]
})
export class MoviesModule { }
