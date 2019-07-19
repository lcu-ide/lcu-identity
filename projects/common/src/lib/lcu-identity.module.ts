import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './controls/sign-in/sign-in.component';
import { RegisterComponent } from './controls/register/register.component';
import { ForgotPasswordComponent } from './controls/forgot-password/forgot-password.component';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentityConfigManagerElementComponent } from './elements/identity-config-manager-element/identity-config-manager-element.component';
import { TermsConditionsComponent } from './controls/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    IdentityConfigManagerElementComponent,
    TermsConditionsComponent],
  imports: [
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    IdentityConfigManagerElementComponent,
    TermsConditionsComponent],
  entryComponents: [
    SignInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    IdentityConfigManagerElementComponent,
    TermsConditionsComponent]
})
export class LcuIdentityModule {}
