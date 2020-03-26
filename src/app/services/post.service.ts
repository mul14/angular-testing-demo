import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/posts');
  }

  getById(id: number) {
    return this.http.get<Post>(this.baseUrl + '/posts/' + id);
  }
}
