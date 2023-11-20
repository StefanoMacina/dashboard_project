import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class signupComponent {
  hide = true

  onSubmit(formValues : NgForm){
    const {email, password} =formValues.value
    console.log(email, password)
  }

}
