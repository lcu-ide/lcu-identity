import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './controls/sign-in/sign-in.component';
import { RegisterComponent } from './controls/register/register.component';
import { ForgotPasswordComponent } from './controls/forgot-password/forgot-password.component';
import { FathymSharedModule } from '@lcu-ide/common';

@NgModule({
  declarations: [SignInComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [
    FathymSharedModule
  ],
  exports: [SignInComponent, RegisterComponent, ForgotPasswordComponent],
  entryComponents: [SignInComponent, RegisterComponent, ForgotPasswordComponent]
})
export class LcuIdentityModule { }
