import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true

  constructor(
    private authService : AuthService,
    private navigationService : NavigationService,
    private router : Router
  ){

  }

 onSubmit(formValues : NgForm){
  const { email, password} = formValues.value
  // console.log(email, password)
  this.authService.signin({email : email, password : password, returnSecureToken : true}).subscribe((data : any)=> {
    const {email, idToken, localId, expiresIn} = data
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    this.authService.createUser(email, idToken, localId, expirationDate)
    localStorage.setItem('user', JSON.stringify(this.authService.user))
    this.navigationService.gotoHomePage()
  })
  }
}
