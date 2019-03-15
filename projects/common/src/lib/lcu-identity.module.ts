import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule } from '@angular/material';
import { SignInComponent } from './controls/sign-in/sign-in.component';
import { RegisterComponent } from './controls/register/register.component';
import { ForgotPasswordComponent } from './controls/forgot-password/forgot-password.component';
import { FathymSharedModule } from '@lcu-ide/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentityConfigManagerElementComponent } from './elements/identity-config-manager-element/identity-config-manager-element.component';

@NgModule({
  declarations: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent],
  entryComponents: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent]
})
export class LcuIdentityModule {}
