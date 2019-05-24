
import { Component, OnInit } from '@angular/core';
import { RegisterModel, SignInModel, ValidationPatternModel } from '@lcu-ide/lcu-identity-common';
import { TermsConditionsModel } from 'projects/common/src/lcu.api';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  public Loading: boolean;
  public TermsConditionsConfig: Array<TermsConditionsModel>;

  constructor() {
    this.TermsConditionsConfig = [];
  }

  public ngOnInit(): void {
    let tc1: TermsConditionsModel = new TermsConditionsModel();
    tc1.Term = 'Term One';
    tc1.Condition = 'Conditions One';

    let tc2: TermsConditionsModel = new TermsConditionsModel();
    tc2.Term = 'Term Two';
    tc2.Condition = 'Conditions Two';

    this.TermsConditionsConfig.push(tc1);
    this.TermsConditionsConfig.push(tc2);
  }

  public HandleRegister(reg: RegisterModel): void {
    alert('Register: ' + JSON.stringify(reg));
  }

  public SignIn(evt: SignInModel): void {
   // this.Loading = true;
    alert('Sign in: ' + evt);
  }

  public ForgotPassword(evt: string): void {
    alert('Forgot Password');
  }

  public UsernameValidationConfig(): ValidationPatternModel {
    const config: ValidationPatternModel = new ValidationPatternModel();
    config.Pattern = '^[a-z0-9]*$';

    return config;
  }

  public AlreadyRegistered(evt: boolean): void {
    alert('Already a member');
  }

  public AgreeToTerms(evt: boolean): void {
    console.log('agree to terms: ', evt);
  }
}
