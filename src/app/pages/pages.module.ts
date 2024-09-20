import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FixedExpensesComponent } from './fixed-expenses/fixed-expenses.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    FixedExpensesComponent,
    DailyExpensesComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: []
})
export class PagesModule { }
