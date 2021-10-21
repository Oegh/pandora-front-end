import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private loginUrl = 'https://api.cujae.edu.cu/user/'
  private nodeApiUrl = 'http://localhost:4001/'
  private url = this.nodeApiUrl;
  userToken: string | null = null;

  constructor(
    private _http: HttpClient,
    private router: Router) { 

  }

  logout() {
    localStorage.removeItem('token');
  }

  loginNode(user: UserModel) {
    const data = {
      username: user.userName, 
      password: user.pass, 
      audience: 'pandora',
    }

    return this._http.post(`${this.nodeApiUrl}/auth`,data)
  }

  loginBasic(user: UserModel) {
    const base64Pass = btoa(user.userName+":"+user.pass);

    const headerDict = {
      'Authorization': `Basic ${base64Pass}`
    }

    console.log(base64Pass);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64Pass}`});
    let options = { headers: headers };

    headers.append('Authorization', `Basic ${base64Pass}`);

    return this._http.post(`${this.loginUrl}${user.userName}`, null, options)
  }

  login(user: UserModel) {
    const authData = {
      username: user.userName, 
      password: user.pass, 
      audience: 'pandora'
    };

    return this._http.post(
      `${ this.url }auth`,
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
