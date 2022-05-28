import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url = 'http://localhost:8080';
  token: string = ''; 

  constructor(private http: HttpClient) { }
  login(email: string, password:string): Observable<any> {
    return this.http.post(this.url + '/login', {email:email, password:password})
  }
}
