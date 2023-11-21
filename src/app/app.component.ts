import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  authService = inject(AuthService);

  ngOnInit() {
    const user = localStorage.getItem('user');
  if (user) {
    const { email, id, __token, _expirationDate } = JSON.parse(user);
    this.authService.createUser(email, id, __token, _expirationDate);
  } else {
    return;
  }
}
}
