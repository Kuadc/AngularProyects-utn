import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CatalogService } from './catalog.service';


@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  providers: [CommonModule, CatalogService],
  standalone: true,

})
export class CatalogComponent {
  poster:any = [];
  movies: any=[]; // Initialize it as an array
  baseUrl = "https://www.omdbapi.com/?apikey=74e485c7&s=";
  fullUrl = "";
  constructor( private catalogServices: CatalogService) {}

  ngOnInit() {
   this.catalogServices.getMovieDetails()
   .then((data) => {
     this.poster = data;
     console.log('Poster fetched:', this.poster);
  })
  }
  
  async searchMovies(title: string) {
    this.fullUrl = this.baseUrl + title;
    //console.log('Full URL:', this.fullUrl);

    this.catalogServices.getMovies(this.fullUrl)
    .then((data) => {;
      this.movies = data;
      console.log('Movies fetched:', this.movies);
    })

}

}