import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseModeledResponse, Status } from '@lcu-ide/common';
import { SignInModel } from './sign-in.model';

@Component({
  selector: 'lcu-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnChanges, OnInit {
  //  Fields

  //  Properties
  @Input('error')
  public Error: string;

  @Input('loading')
  public Loading: boolean;

  @Output('sign-in')
  public SignIn: EventEmitter<SignInModel> = new EventEmitter<SignInModel>();

  public SignInFormGroup: FormGroup;

  @Input('use-remember')
  public UseRememberMe: boolean;

  @Input('username')
  public Username: string;

  //  Constructors
  constructor(protected formBldr: FormBuilder) {}

  // 	Life Cycle
  public ngOnChanges(_: SimpleChanges) {
    if (_['Username']) {
      this.SignInFormGroup.controls.username.setValue(this.Username);
    }
  }

  public ngOnInit() {
    this.SignInFormGroup = this.formBldr.group({
      username: [this.Username || '', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    });
  }

  // 	API Methods
  public HandleSignIn() {
    const signIn = this.buildSignInModelFromForm();

    console.log(signIn);

    this.SignIn.emit(signIn);
  }

  // 	Helpers
  protected buildSignInModelFromForm(): SignInModel {
    return {
      Username: this.SignInFormGroup.get('username').value,
      Password: this.SignInFormGroup.get('password').value,
      RememberMe: !!this.SignInFormGroup.get('remember').value
    };
  }
}
