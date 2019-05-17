import { Component, Input, OnInit, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import { Status, PasswordValidator, ValidationMessages, UserNameValidator, EmailValidator } from '@lcu-ide/common';
import { RegisterModel } from './register.model';
import { ValidationPatternModel } from './register-validation-pattern.model';


@Component({
  selector: 'lcu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Fields

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
   * Local property for username validation config
   */
  // protected _usernameValidationConfig: ValidationPatternModel;

  /**
   * Local property for email validation config
   */
  protected _emailValidationConfig: ValidationPatternModel;

  /**
   * Local property for password validation config
   */
  protected _passwordValidationConfig: ValidationPatternModel;

  /**
   * Local property for successful registration
   */
  protected _success: boolean;

  //  Properties

 /**
 * Access email field
 */
  public get EmailControl(): AbstractControl {
    return this.Form.get('emailControl');
  }

  /**
   * Access UsernameInput field
   */
  // public get UsernameControl(): AbstractControl {
  //   return this.Form.get('usernameControl');
  // }

  /**
   * Access password field
   */
  public get PasswordControl(): AbstractControl {
    return this.Form.get('passwordControl');
  }

  /**
   * Access confirm password field
   */
  public get ConfirmPasswordControl(): AbstractControl {
    return this.Form.get('confirmPasswordControl');
  }

  /**
   * Toggle to show / hide password value
   */
  public HidePassword: boolean = true;

  /**
   * Toggle to show / hide password value
   */
  public HideConfirmPassword: boolean = true;

  /**
   * Sign in form group
   */
  public Form: FormGroup;

  /**
   * Form group for password controls
   */
  public PasswordControls: FormGroup;

  /**
   * Registration error
   */
  public RegisterError: string;

  /**
   * Confirm password validation
   */
  public VMConfirmPassword: ValidationMessages = ValidationMessages.ConfirmPassword;

  /**
   * Email validation
   */
  public VMEmail: ValidationMessages = ValidationMessages.Email;

  /**
   * Password validation
   */
  public VMPassword: ValidationMessages = ValidationMessages.Password;

  /**
   * Username validation
   */
  // public VMUsername: ValidationMessages = ValidationMessages.UserName;

  /**
   * Output event for already registered
   */
  // tslint:disable-next-line:no-output-rename
  @Output('already-registered')
  public AlreadyRegistered: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Output event for sign in
   */
  // tslint:disable-next-line:no-output-rename
  @Output('sign-in')
  public SignIn: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Output event for registration
   */
  // tslint:disable-next-line:no-output-rename
  @Output('register')
  public Register: EventEmitter<RegisterModel> = new EventEmitter<RegisterModel>();

  /**
   * Output event for registration error
   */
  // tslint:disable-next-line:no-output-rename
  @Output('registration-error')
  public RegistrationError: EventEmitter<Status> = new EventEmitter<Status>();

  /**
   * Input property for error
   */
  @Input('error')
  public get Error(): string {
    return this._error;
  }

  public set Error(val: string) {
    this._error = val;

    this.hasError(val);
  }

  /**
   * Input property for loading
   */
  @Input('loading')
  public get Loading(): boolean {
    return this._loading;
  }

  public set Loading(val: boolean) {
    if (!val) { return; }

    this._loading = coerceBooleanProperty(val);

    this.disableForm(this._loading);
  }

  /**
   * Input property for successful registration
   */
  @Input('success')
  public get Success(): boolean {
    return this._success;
  }

  public set Success(val: boolean) {
    this._success = val;

    if (val === true) {
      this.resetForm();
    }
  }

  /**
   * Input property for username validation config
   */
  // @Input()
  // get UsernameValidationConfig(): ValidationPatternModel {
  //   return this._usernameValidationConfig;
  // }

  // set UsernameValidationConfig(val: ValidationPatternModel) {
  //   if (!val) { return; }

  //   this._usernameValidationConfig = val;
  // }

  /**
   * Input property for email validation config
   */
  @Input('emailValidationConfig')
  get EmailValidationConfig(): ValidationPatternModel {
    return this._emailValidationConfig;
  }

  set EmailValidationConfig(val: ValidationPatternModel) {
    if (!val) { return; }

    this._emailValidationConfig = val;
  }

  /**
   * Input property for password validation config
   */
  @Input('passwordValidationConfig')
  get PasswordValidationConfig(): ValidationPatternModel {
    return this._passwordValidationConfig;
  }

  set PasswordValidationConfig(val: ValidationPatternModel) {
    if (!val) { return; }

    this._passwordValidationConfig = val;
  }

  //  Constructors
  constructor() {
    this.AlreadyRegistered = new EventEmitter<boolean>();

    this.SignIn = new EventEmitter<any>();

    this.Register = new EventEmitter<RegisterModel>();

    this.RegistrationError = new EventEmitter<Status>();
  }

  // 	Life Cycle

 /**
 * On init setup form and fields
 */
  public ngOnInit() {

    this.Form = new FormGroup({
      // usernameControl: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.pattern(UserNameValidator.UsernamePattern)
      // ])),
      emailControl: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(EmailValidator.EmailPatternDomain)
      ])),
      termsControl: new FormControl(false, {validators: Validators.requiredTrue}),
      passwordControl: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.pattern(PasswordValidator.StrongPassword)
      ])),
      confirmPasswordControl: new FormControl('', Validators.required)
    });

    this.Form.validator = PasswordValidator.PasswordsMatch(this.PasswordControl, this.ConfirmPasswordControl);

    this.onChanges();
  }

  /**
   * Listen for form changes
   */
  protected onChanges(): void {

    this.Form.valueChanges.subscribe(val => {
    });
  }

  // 	API Methods

  /**
   * Sign in handler
   */
  public SignInHandler() {
    this.SignIn.emit();
  }

  /**
   * If user is already registered
   */
  public CurrentMember(): void {
    this.AlreadyRegistered.emit(true);
  }

  public HandleRegister() {
   // this.LoadingInput = true;

    // this.Errors = null;

    const register = this.buildRegisterModelFromForm();

    this.Register.emit(register);
  }

  // 	Helpers

  /**
   * Build registration model
   */
  protected buildRegisterModelFromForm(): RegisterModel {
      return {
        // need to pass email as username right now
        Username: this.EmailControl.value,
        Password: this.PasswordControl.value
      };
    }

   /**
    * Disable / enable form
    * @param val toggle value
    */
   protected disableForm(val: boolean): void {
     if (!this.Form) { return; }

     if (val === true) {
      this.Form.disable();
     } else {
      this.Form.enable();
     }
     console.log('Form is disabled: ', val);

     //(val) ? this.Form.disable() : this.Form.enable();
   }

   /**
    * Handle registration errors
    * 
    * @param val error message
    */
   protected hasError(val: string): void {
    this.RegisterError = val;
   }

   /**
    * Clear form
    */
   protected resetForm(): void {
     if (!this.Form) { return; }
     this.Form.reset();
   }
  }


