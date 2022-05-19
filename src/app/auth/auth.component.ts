import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { LoginService } from './services/login.service';
import { AuthService } from '../core/services/auth.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { ApiCujaeData } from "../core/Interfaces/ApiCujaeData.interface";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  passValidated: boolean = false;
  showError: boolean = false;
  authError: boolean = false;
  serverError: boolean = false;

  loginForm = this._formBuilder.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    let userInput: string = this.loginForm.get('user')?.value;
    let passInput: string = this.loginForm.get('pass')?.value;

    if(userInput==""|| passInput==""){
      this.showError = true;
    }else{
      this.showError = false;
    }

    console.log(userInput);
    console.log(passInput);
    

    if(!this.showError) {
      let user = new UserModel();
      user.name = userInput;
      user.password = passInput;
      user.userName = userInput;

      this._authService.getUser().toPromise

      

      this._authService.login(user).subscribe( async (loginData: any) => {
        await this.getUserData();
        console.log(2);
        this.router.navigate(['']);
      }, (error: HttpErrorResponse) => {
        if(error.status === 401) {
          this.authError = true;
        }
        else {
          this.serverError = true;
        }
        console.log(error);
      })
    }

  }

  async getUserData() {
    return this._authService.getUser().toPromise().then((data) => {
      if(data.error != null) {
        console.log(data.error);
      } 
      else {
        this._authService.user.setData(data);
        this._authService.user.saveToCache();
        console.log(1);
      }
    }).catch((err) => {
      console.log(err);
    })
  }


}
