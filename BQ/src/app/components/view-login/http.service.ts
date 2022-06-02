import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    url = 'http://localhost:8080';
    token: any;

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        return this.http.post(this.url + '/login', { email: email, password: password })
            .pipe(
                catchError(async (error) => this.errorHandler(error))
            )
            .subscribe((resp: any) => {
                console.log(resp);
                sessionStorage.setItem('user', JSON.stringify(resp));
                this.router.navigate(['/menu']);
            })
    }

    getToken() {
        return sessionStorage.getItem('user')
    }
    
    public get logIn(): boolean {
        return (sessionStorage.getItem('user') !== null);
    }

    logout() {
        sessionStorage.removeItem('user');
        this.router.navigate(['/login'])
    }

    errorHandler(error: HttpErrorResponse) {
        alert('usuario o contraseña incorrecta')
        return error
    }
}