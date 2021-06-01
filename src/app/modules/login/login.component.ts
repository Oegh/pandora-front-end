import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passValidated: boolean = false;
  showError: boolean = false;

  loginForm = this._formBuilder.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });

  onSubmit(){

    let userInput: string = this.loginForm.get('user')?.value;
    let passInput: string = this.loginForm.get('pass')?.value;

    if(userInput==""|| passInput==""){
      this.showError = true;
    }else{
      this.showError = false;
    }

  }

  constructor(private _formBuilder: FormBuilder,
    private _loginService: LoginService) { }

  ngOnInit(): void {

  }

}
