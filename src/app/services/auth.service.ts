import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = true

  constructor(
    private _router : Router
  ) { }


  canActivate(){
    if(this.isLoggedin){
      return true
    } else {
      this._router.navigate(['login'])
      return false
    }
  }
}
