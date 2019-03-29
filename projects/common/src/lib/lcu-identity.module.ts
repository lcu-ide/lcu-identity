import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatStepperModule } from '@angular/material';
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
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  exports: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent],
  entryComponents: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent]
})
export class LcuIdentityModule {}
