import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class signupComponent {
  hide = true

  constructor(
    private authService : AuthService
  ){

  }

  onSubmit(formValues : NgForm){
    const {email, password} =formValues.value
    // console.log(email, password)
    this.authService.signup({email : email, password : password, returnSecureToken : true}).subscribe((data) => {
      console.log(data)
    })
  }

}
