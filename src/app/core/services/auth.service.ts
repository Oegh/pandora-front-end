import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { map } from 'rxjs/operators';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiCujaeData } from '../Interfaces/ApiCujaeData.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 
  private loginUrl = 'https://apidev.cujae.edu.cu/user/login'
  private nodeApiUrl = 'http://localhost:4001'
  private url = this.nodeApiUrl;
  userToken: string | null = null;
  userRefreshToken: string | null = null;
  user: UserModel;

  constructor(
    private _http: HttpClient,
    private router: Router) { 
      this.user = new UserModel();
      this.user.readCache();
  }

  logout() {
    localStorage.clear()
  }

  login(user: UserModel) {
    const base64Pass = btoa(user.userName+":"+user.password);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${base64Pass}`});
    let options = { headers: headers };

    headers.append('Authorization', `Basic ${base64Pass}`);

    return this._http.get(`${this.loginUrl}`, options).pipe(
      map( (res:any) => {
        this.saveToken( res['accessToken'], res['refreshToken'] );
        return res;
      })
    );
  }

  refreshToken() {
    const token = this.readAccessToken()
    const refreshToken = this.readRefreshToken()

    const data = {
      refresh_token: refreshToken
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`});
    let options = { headers: headers };
    headers.append('Authorization', `Bearer ${token}`);

    return this._http.post(`${this.nodeApiUrl}/refresh-token`, data, options).pipe(
      map( (res: any) => {
        this.saveToken(res['accessToken'], res['refreshToken']);
        return res;
      })
    );
  }

  getUser(): Observable<ApiCujaeData> {
    const token = this.readAccessToken()

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`});
    let options = { headers: headers };
    headers.append('Authorization', `Bearer ${token}`);

    return this._http.get<ApiCujaeData>(`${this.nodeApiUrl}/user`, options)
  }

  private saveToken( accessToken: string, refreshToken: string) {
    this.userToken = accessToken;
    this.userRefreshToken = refreshToken;
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  readAccessToken(): string| null {
    if(localStorage.getItem('access_token')) {
      this.userToken = localStorage.getItem('access_token');
    }

    return this.userToken;
  }

  readRefreshToken(): string| null {
    if(localStorage.getItem('refresh_token')) {
      this.userRefreshToken = localStorage.getItem('refresh_token');
    }

    return this.userRefreshToken;
  }

  isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    this.readAccessToken();
    if(this.userToken === null) {
      return false;
    }
    return !jwtHelper.isTokenExpired(this.userToken)
  }

  isRefreshTokenExpired(): boolean {
    const jwtHelper = new JwtHelperService();
    if(this.userRefreshToken === null) {
      return true;
    }
    return jwtHelper.isTokenExpired(this.userRefreshToken)
  }
  
}
