import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private _router : Router
  ) { }

  gotoLoginPage(){
    this._router.navigate(['login'])
  }

  gotoHomePage(){
    this._router.navigate(['','page1'])
  }
}
