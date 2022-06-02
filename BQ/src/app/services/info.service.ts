import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  login(email: string, password:string): Observable<any> {
    return this.http.post(this.url + '/login', {email:email, password:password})
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'null' ? true : false;
  }
}

