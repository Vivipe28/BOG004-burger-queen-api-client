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
            .subscribe((resp: any) => {
                sessionStorage.setItem('token', JSON.stringify(resp.accessToken));
                localStorage.setItem('user', JSON.stringify(resp.user.roles));
                if (resp.user.roles.waiter) {
                    this.router.navigate(['/menu']);
                } else if (resp.user.roles.chef) {
                    this.router.navigate(['/chef']);
                } else if (resp.user.roles.admin) {
                    this.router.navigate(['/admin']);
                }
            })
    }

    getUser() {
        return localStorage.getItem('user')
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
                    this.snackservice.showNotification('your email or password do not match','OK');
                }
            }
        }

        return throwError(() => error)
    }
}


