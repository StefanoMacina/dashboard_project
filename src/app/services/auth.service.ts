import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin = true
  API_key = 'AIzaSyAWu-oN2vHS7a1YbRD5n1lmTD6p7Yyob3Q'
  signUp_endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_key}`

  constructor(
    private _router : Router,
    private _http : HttpClient
  ) { }

    signup(body : any){
      return this._http.post(this.signUp_endpoint, body)
    }


  canActivate(){
    if(this.isLoggedin){
      return true
    } else {
      this._router.navigate(['login'])
      return false
    }
  }
}
