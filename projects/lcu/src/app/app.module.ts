import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule } from '@lcu-ide/common';
import { SignInComponent, RegisterComponent, ForgotPasswordComponent, LcuIdentityModule } from '@lcu-ide/lcu-identity-common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FathymSharedModule, LcuIdentityModule],
  exports: [LcuIdentityModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const signIn = createCustomElement(SignInComponent, { injector: this.injector });

    customElements.define('lcu-sign-in', signIn);

    const register = createCustomElement(RegisterComponent, { injector: this.injector });

    customElements.define('lcu-register', register);

    const forgotPassword = createCustomElement(ForgotPasswordComponent, { injector: this.injector });

    customElements.define('lcu-forgot-password', forgotPassword);
  }
}
