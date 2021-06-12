import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://..... url to LDAP';
  userToken: string | null = null;

  constructor(
    private _http: HttpClient,
    private router: Router) { 

  }

  logout() {
    localStorage.removeItem('token');
  }

  login(user: UserModel) {
    const authData = {
      user: user.userName,
      password: user.pass
    };

    return this._http.post(
      `${ this.url }loginUser`,
      authData
    ).pipe(
      map( (res:any) => {
        this.saveToken( res['token'] );
        return res;
      })
    );
  }

  private saveToken( token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  readToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }
    else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {
    if(this.userToken === null) {
      return false;
    }
    return this.userToken.length > 2;
  }
  
}
