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
   * Access UsernameInput field
   */
  public get Username(): AbstractControl {
      return this.Form.get('username');
  }

  /**
   * Access password field
   */
  public get Password(): AbstractControl {
    return this.Form.get('password');
  }

  /**
   * Access remember me field
   */
  public get RememberMe(): AbstractControl {
    return this.Form.get('rememberMe');
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
   * Local property for error
   */
  protected _error: string;

  /**
   * Local property for loading
   */
  protected _loading: boolean;

  /**
   * Local property for remember me
   */
  protected _rememberme: boolean;

  /**
   * Local property for username
   */
  protected _username: string;


  /**
   * Output event for signing in
   */
  @Output() SignIn: EventEmitter<SignInModel> = new EventEmitter<SignInModel>();

  /**
   * Output event for forgot password
   */
  @Output() ForgotPassword: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  get ErrorInput(): string {
    return this._error;
  }

  set ErrorInput(val: string) {
    if (!val) { return; }
    this._error = val;
  }

  /**
   * Input property for remember me
   */
  @Input()
  get RememberMeInput(): boolean {
    return this._rememberme;
  }

  set RememberMeInput(val: boolean) {
    if (!val) { return; }
    this._rememberme = val;

    this.RememberMe.setValue(val);
  }

  /**
   * Input property for username
   */
  @Input()
  get UsernameInput(): string {
    return this._username;
  }

  set UsernameInput(val: string) {
    if (!val) { return; }
    this._username = val;
  }

  /**
   * Input property to loading
   */
  @Input()
  get LoadingInput(): boolean {
    return this._loading;
  }

  set LoadingInput(val: boolean) {
    if (!val) { return; }

    this._loading = val;

    this.disableForm(val);
  }

  //  Constructors
  constructor() {}

  // 	Life Cycle

 /**
 * On init setup form and fields
 */
  public ngOnInit() {
    this.Form = new FormGroup({
      username: new FormControl('', {validators: Validators.required}),
      password: new FormControl('', {validators: Validators.required}),
      rememberMe: new FormControl(false)
    });

    this.setInitialValues();
    this.onChanges();
  }

  /**
   * Listen for form changes
   */
  protected onChanges(): void {

    this.Form.valueChanges.subscribe(val => {
    });

    this.Username.valueChanges.subscribe(val => {

    });
  }

  // 	API Methods

  /**
   * Sign in handler
   */
  public SignInHandler() {
  //  this.LoadingInput = true;
    const signIn: SignInModel = this.buildSignInModelFromForm();
    this.SignIn.emit(signIn);
  }

  /**
   * Forgot password handler
   */
  public ForgotPasswordHandler() {
    this.ForgotPassword.emit(this.Username.value);
  }

  // 	Helpers

  /**
   * Build sign in model
   */
  protected buildSignInModelFromForm(): SignInModel {
    return {

      Username: this.Username.value,
      Password: this.Password.value,
      RememberMe: !!this.RememberMe.value
    };
   }

   /**
    * Disable / enable form
    * @param val toggle value
    */
   protected disableForm(val: boolean): void {
    (val) ? this.Form.disable() : this.Form.enable();
   }

   /**
    * Set initial values if input properties have values
    */
   protected setInitialValues(): void {
    if (this._username) {
      this.Username.setValue(this._username);
    }

    if (this._rememberme) {
      this.RememberMe.setValue(this._rememberme);
    }
   }
  }
