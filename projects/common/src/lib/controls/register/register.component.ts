import { Component, Input, OnInit, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from '@lcu-ide/common';
import { RegisterModel } from './register.model';

@Component({
  selector: 'lcu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnChanges, OnInit {
  //  Fields

  //  Properties
  public Errors: string[];

  public Loading: boolean;

  public get Password() {
    return this.RegisterFormGroup.get('password');
  }

  public get PasswordConfirmation() {
    return this.RegisterFormGroup.get('passwordConfirmation');
  }

  @Output('register')
  public Register: EventEmitter<RegisterModel> = new EventEmitter<RegisterModel>();

  public RegisterFormGroup: FormGroup;

  @Output('error')
  public RegisterError: EventEmitter<Status> = new EventEmitter<Status>();

  @Input('username')
  public Username: string;

  public get UsernameControl() {
    return this.RegisterFormGroup.get('username');
  }

  //  Constructors
  constructor(protected route: ActivatedRoute, protected formBldr: FormBuilder) {}

  //	Life Cycle
  public ngOnChanges(_: SimpleChanges) {
    if (_['Username']) {
      if (this.RegisterFormGroup) {
        this.RegisterFormGroup.controls.username.setValue(this.Username);
      }
    }
  }

  public ngOnInit() {
    this.RegisterFormGroup = this.formBldr.group(
      {
        username: new FormControl(this.Username || '', [Validators.required, Validators.email]),
        password: ['', (Validators.required, Validators.minLength(8))],
        passwordConfirmation: ['', Validators.required]
      },
      { validator: this.passwordConfirming }
    );
  }

  //	API Methods
  public HandleRegister() {
    this.Loading = true;

    this.Errors = null;

    var register = this.buildRegisterModelFromForm();

    this.Register.emit(register);
  }

  //	Helpers
  protected buildRegisterModelFromForm(): RegisterModel {
    return {
      Username: this.RegisterFormGroup.get('username').value,
      Password: this.RegisterFormGroup.get('password').value
    };
  }

  protected passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordConfirmation').value) {
      c.get('passwordConfirmation').setErrors({ noMatch: true });

      return { invalid: true };
    }
  }
}
