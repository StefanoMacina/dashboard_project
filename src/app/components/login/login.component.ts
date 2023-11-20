import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true

 onSubmit(formValues : NgForm){
  const { email, password} = formValues.value
  console.log(email, password)
  // call authservice
 }


}
