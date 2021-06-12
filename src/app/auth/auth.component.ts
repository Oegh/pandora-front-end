import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { LoginService } from './services/login.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  passValidated: boolean = false;
  showError: boolean = false;

  loginForm = this._formBuilder.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder,
    private _authService: AuthService) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log("test");
    let userInput: string = this.loginForm.get('user')?.value;
    let passInput: string = this.loginForm.get('pass')?.value;

    if(userInput==""|| passInput==""){
      this.showError = true;
    }else{
      this.showError = false;
    }

  }


}
