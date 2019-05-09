import { ValidationPatternModel } from './register-validation-pattern.model';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status, PasswordValidator, ValidationMessages, UserNameValidator, EmailValidator } from '@lcu-ide/common';
import { RegisterModel } from './register.model';

@Component({
  selector: 'lcu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  //  Properties

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
   * Output event for already registered
   */
  @Output() public AlreadyRegistered: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Output event for sign in
   */
  @Output() public SignIn: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Output event for registration
   */
  @Output() public Register: EventEmitter<RegisterModel> = new EventEmitter<RegisterModel>();

  /**
   * Output event for registration error
   */
  @Output() public RegisterError: EventEmitter<Status> = new EventEmitter<Status>();

  /**
   * Input property for error
   */
  @Input()
  get Error(): string {
    return this._error;
  }

  set Error(val: string) {
    if (!val) { return; }
    this._error = val;
  }

  /**
   * Input property for loading
   */
  @Input()
  get Loading(): boolean {
    return this._loading;
  }

  set Loading(val: boolean) {
    if (!val) { return; }

    this._loading = val;

    this.disableForm(val);
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
  @Input()
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
  @Input()
  get PasswordValidationConfig(): ValidationPatternModel {
    return this._passwordValidationConfig;
  }

  set PasswordValidationConfig(val: ValidationPatternModel) {
    if (!val) { return; }

    this._passwordValidationConfig = val;
  }

  public readonly StrongPassword: string = '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)[A-Za-z\d!$%@#£€*?&]{8,}$';
  public readonly LettersNumbers: string ='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  // public readonly StrongPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}$)/gm
  // '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'

  //  Constructors
  constructor() {}

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
     
    (val) ? this.Form.disable() : this.Form.enable();
   }

   /**
    * Handle registration errors
    */
   protected hasErrors(): void {

   }
  }


