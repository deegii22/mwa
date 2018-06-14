import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyCustomHttpService {

  constructor(public http: HttpClient) { }
  getUserData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }
  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }
}
