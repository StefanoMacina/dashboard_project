import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin = false
  API_key = 'AIzaSyAWu-oN2vHS7a1YbRD5n1lmTD6p7Yyob3Q'
  signUp_endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_key}`
  signIn_endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_key}`
  user : UserModel | undefined | null

  constructor(
    private _router : Router,
    private _http : HttpClient
  ) { }
    
  createUser(email : string, id : string, _token : string, _expirationDate : Date){
    this.user = new UserModel(email, id, _token, _expirationDate )
    this.isLoggedin = true
  }

    signup(body : {}){
      return this._http.post(this.signUp_endpoint, body)
    }

    signin(body : {}){
      return this._http.post(this.signIn_endpoint, body)
    }

    logout(){
      this.user = null,
      localStorage.removeItem('user'),
      this.isLoggedin = false,
      this._router.navigate(['login'])
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
