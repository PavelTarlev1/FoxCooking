import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostClient } from '../model/postClient';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(postClient: PostClient): Observable<PostClient>{
     return this.http.post<PostClient>("https://localhost:44341/api/Person", postClient);
  }
}