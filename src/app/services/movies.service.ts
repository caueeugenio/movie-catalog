import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = `http://localhost:3000`;

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get<any>(this.URL+`/movies`);
  }

  addMovies(body:any){
    return this.httpClient.post<any>(this.URL+`/movies`,body);
  }
}
