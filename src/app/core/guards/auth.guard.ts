import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private _authService:AuthService) {}

  canActivate(): boolean {
    return this._authService.isAuthenticated();
  }
  canLoad(): boolean {
      return this._authService.isAuthenticated();
  }
}
