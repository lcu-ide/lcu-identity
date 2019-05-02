import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { BaseModeledResponse, Status } from '@lcu-ide/common';
import { SignInModel } from './sign-in.model';

@Component({
  selector: 'lcu-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  //  Fields

/**
   * Access Username field
   */
  public get FieldUsername(): AbstractControl {
    return this.Form.get('fieldusername');
  }

  /**
   * Access password field
   */
  public get FieldPassword(): AbstractControl {
    return this.Form.get('fieldpassword');
  }

  /**
   * Access remember me field
   */
  public get FieldRememberMe(): AbstractControl {
    return this.Form.get('fieldrememberMe');
  }

  //  Properties

  /**
   * Toggle to show / hide password value
   */
  public HidePassword: boolean = true;

 /**
   * Sign in form group
   */
  public Form: FormGroup;

  /**
   * Local property for username
   */
  protected _username: string;

  /**
   * Local property for remember me
   */
  protected _rememberme: boolean;

  /**
   * Local property for error
   */
  protected _error: string;

  /**
   * Input property to loading
   */
  @Input() public Loading: boolean;

  /**
   * Output event for signing in
   */
  @Output() SignIn: EventEmitter<SignInModel> = new EventEmitter<SignInModel>();

  /**
   * Output event for forgot password
   */
  @Output() ForgotPassword: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  get Error(): string {
    return this._error;
  }

  set Error(val: string) {
    if (!val) { return; }
    this._error = val;
  }

  /**
   * Input property for remember me
   */
  @Input()
  get RememberMe(): boolean {
    return this._rememberme;
  }

  set RememberMe(val: boolean) {
    if (!val) { return; }
    this._rememberme = val;

    this.FieldUsername.setValue(val);
  }

  /**
   * Input property for username
   */
  @Input()
  get Username(): string {
    return this._username;
  }

  set Username(val: string) {
    if (!val) { return; }
    this._username = val;

    this.FieldRememberMe.setValue(val);
  }


  //  Constructors
  constructor() {}

  // 	Life Cycle

 /**
 * On init setup form and fields
 */
  public ngOnInit() {
    this.Form = new FormGroup({
      fieldusername: new FormControl('', {validators: Validators.required}),
      fieldpassword: new FormControl('', {validators: Validators.required}),
      fieldrememberMe: new FormControl('')
    });

    this.onChanges();
  }

  /**
   * Listen for form changes
   */
  protected onChanges(): void {
    this.Form.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  // 	API Methods

  /**
   * Sign in handler
   */
  public SignInHandler() {
    const signIn: SignInModel = this.buildSignInModelFromForm();
    this.SignIn.emit(signIn);
  }

  /**
   * Forgot password handler
   */
  public ForgotPasswordHandler() {
    console.log('forgot password');
    this.ForgotPassword.emit(this.FieldUsername.value);
  }

  // // 	Helpers
  protected buildSignInModelFromForm(): SignInModel {
    return {
      Username: this.FieldUsername.value,
      Password: this.FieldPassword.value,
      RememberMe: !!this.FieldRememberMe.value
    };
   }
  }
