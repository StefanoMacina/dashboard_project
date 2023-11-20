import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';  
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
