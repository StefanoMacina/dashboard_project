import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { signupComponent } from './components/register/singup.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { isLoggedinGuard } from './guardians/is-loggedin.guard';

export const routes: Routes = [
    {path : '', component: DashboardComponent, canActivate:[isLoggedinGuard], children : [
        {path : '', redirectTo : '/page1', pathMatch : 'full'},
        { path : 'page1' , component : Page1Component},
        { path : 'page2' , component : Page2Component},
        { path : 'page3' , component : Page3Component},
    ]},
    {path : 'login', component: LoginComponent},
    {path : 'signup', component: signupComponent}
];
