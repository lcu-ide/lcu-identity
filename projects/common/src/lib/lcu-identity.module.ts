import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './controls/sign-in/sign-in.component';
import { RegisterComponent } from './controls/register/register.component';
import { ForgotPasswordComponent } from './controls/forgot-password/forgot-password.component';

@NgModule({
  declarations: [SignInComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    CommonModule
  ],
  exports: [SignInComponent, RegisterComponent, ForgotPasswordComponent],
  entryComponents: [SignInComponent, RegisterComponent, ForgotPasswordComponent]
})
export class LcuIdentityModule { }
