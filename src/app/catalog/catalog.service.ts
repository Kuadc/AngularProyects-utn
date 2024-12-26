import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  async getMovies(fullUrl: string) {
    const response = await fetch(fullUrl);
    const data = await response.json();
    console.log('Data del servicio:', data);
    return data.Search;
  }

  async getMovieDetails() {
    const response = await fetch(`https://www.omdbapi.com/?apikey=74e485c7&i=tt0903747`);
    const data = await response.json();
    console.log('Data del servicio:', data);
    return data;
  }
} 