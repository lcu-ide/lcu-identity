
import { Component } from '@angular/core';
import { RegisterModel, SignInModel, ValidationPatternModel } from '@lcu-ide/lcu-identity-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  public Loading: boolean;

  public HandleRegister(reg: RegisterModel): void {
    alert('Register: ' + JSON.stringify(reg));
  }

  public SignIn(evt: SignInModel): void {
   // this.Loading = true;
    console.log('Sign in: ', evt);
  }

  public ForgotPassword(evt: string): void {
    alert('Forgot Password');
  }

  public UsernameValidationConfig(): ValidationPatternModel {
    const config: ValidationPatternModel = new ValidationPatternModel();
    config.Pattern = '^[a-z0-9]*$';

    return config;
  }
}
