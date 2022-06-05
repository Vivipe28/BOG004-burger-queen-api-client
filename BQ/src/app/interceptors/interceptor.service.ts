import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../components/view-login/http.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authservice: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('El interceptor esta funcionando');
    console.log(JSON.parse(this.authservice.getToken()!));

    const Token = req.clone({
      setHeaders:{
        authorization: `Bearer ${JSON.parse(this.authservice.getToken()!)}`
      }
    })
    if(Token === null){
      return next.handle(req)
    }
    else{
    return next.handle(Token) }

}}
