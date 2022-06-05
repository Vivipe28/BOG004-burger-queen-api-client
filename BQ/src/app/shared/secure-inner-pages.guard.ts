import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(JSON.parse(this.authService.getUser()!))
      if (this.authService.getUser()!) {
        window.alert('Access Denied, Login is Required to Access This Page!');
        this.router.navigate(['/menu']);}
    return true;
  }
  
}
