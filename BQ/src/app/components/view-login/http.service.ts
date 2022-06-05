import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, throwError} from "rxjs";

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
                catchError(this.errorHandler)
            )
            .subscribe((resp: any) => {
                console.log(resp);
                sessionStorage.setItem('userToken', JSON.stringify(resp.accessToken));
                // localStorage.setItem('user', JSON.stringify(resp));
                this.router.navigate(['/menu']);
            })
    }

    getToken() {
        return sessionStorage.getItem('userToken')
    }
    
    public get logIn(): boolean {
        return (sessionStorage.getItem('userToken') !== null);
    }

    logout() {
        sessionStorage.removeItem('userToken');
        this.router.navigate(['/login'])
    }

    errorHandler(error: HttpErrorResponse) {
        alert('usuario o contraseña incorrecta')
        return throwError(error)
    }
}