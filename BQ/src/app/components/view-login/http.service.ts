import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    uri = 'http://localhost:8080';
    token: any;

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string){
        this.http.post(this.uri + '/login', { email: email, password: password })
            .pipe(
                catchError(this.errorHandler)
            )
            .subscribe((resp: any) => {
                console.log(resp);
                
                sessionStorage.setItem('user', JSON.stringify(resp.accesToken));
                this.router.navigate(['/menu']);
            })
            ;
    }

    public get logIn(): boolean {
        return (sessionStorage.getItem('user') !== null);
    }
    

    logout() {
        
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
    }

    errorHandler(error: HttpErrorResponse){
        console.log('Ups! invalid user');
        console.warn('other error')
        return throwError('my error')
    }

    
}