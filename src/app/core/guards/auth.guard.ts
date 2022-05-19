import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private _authService:AuthService, public router: Router) {}

  canActivate(): boolean {
    if(!this._authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    return true;
  }
  canLoad(): boolean {
    if(!this._authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
