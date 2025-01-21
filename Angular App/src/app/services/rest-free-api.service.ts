import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestFreeApiService {

  constructor(private httpClient: HttpClient) { }

  getRestData(){
    return this.httpClient.get('https://api.restful-api.dev/objects')
  }
}
