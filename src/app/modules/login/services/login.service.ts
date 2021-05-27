import { Injectable } from '@angular/core';
//import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "";

  constructor( ) { }

  validateUser(user:string, pass:string)
  {
    //return this._httpClient.post(this.url+'autenticate',user);
  }
}
