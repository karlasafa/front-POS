import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://swapi.dev/api/";
   
  constructor(private httpClient: HttpClient) { }
  
  getPlanets(){
    return this.httpClient.get(this.url+'planets');
  }
  getPeople(){
    return this.httpClient.get(this.url+'people');
  }
  
}