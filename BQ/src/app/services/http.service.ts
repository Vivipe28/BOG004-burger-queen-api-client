import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from "rxjs";
import { NotifierService } from "./notifier.service";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url = 'http://localhost:8080';

    constructor(private http: HttpClient, private router: Router, private snackservice: NotifierService) { }

    login(email: string, password: string) {
        return this.http.post(this.url + '/login', { email: email, password: password })
            .pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }
                ))

    }

    get(url: any) {
        return this.http.get(url)
    }
    getUser() {
        return localStorage.getItem('user')
    }

    getId() {
        return sessionStorage.getItem('id')
    }

    getToken() {
        return sessionStorage.getItem('token')
    }

    public get logIn(): boolean {
        return (sessionStorage.getItem('token') !== null);
    }

    logout() {
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        this.router.navigate(['/login'])
    }

    errorHandler(error: HttpErrorResponse): Observable<never> {
        if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
                // this.snackservice.showNotification('Usuario invalido');
            }
            else {
                if (error.status === 400) {
                    this.snackservice.showNotification('your email or password do not match', 'OK');
                }
            }
        }

        return throwError(() => error)
    }
}


