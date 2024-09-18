import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'register', component: RegisterComponent, pathMatch: 'full'},
    { path: 'restore', component: ForgotPasswordComponent, pathMatch: 'full'},
    { path: 'reset', component: ResetPasswordComponent, pathMatch: 'full'},
];
