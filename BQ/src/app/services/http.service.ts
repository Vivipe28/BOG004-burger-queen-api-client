import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url = 'http://localhost:8080';

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        return this.http.post(this.url + '/login', { email: email, password: password })
            .pipe(
                catchError(async (error) => this.errorHandler(error))
            )
            .subscribe((resp: any) => {
                sessionStorage.setItem('token', JSON.stringify(resp.accessToken));
                localStorage.setItem('user', JSON.stringify(resp.user.roles));
                if(resp.user.roles.waiter){
                    this.router.navigate(['/menu']);
                } else if (resp.user.roles.chef){
                    this.router.navigate(['/chef']);
                } else if (resp.user.roles.admin){
                    this.router.navigate(['/admin']);
                }
            })
    }

    getUser() {
        console.log(localStorage.getItem('user'))
        return localStorage.getItem('user')
    }

    getToken() {
        return sessionStorage.getItem('token')
    }
    
    public get logIn(): boolean {
        return (sessionStorage.getItem('token') !== null);
    }

    logout() {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login'])
    }

    errorHandler(error: HttpErrorResponse) {
        alert('usuario o contraseña incorrecta')
        return error
    }
}