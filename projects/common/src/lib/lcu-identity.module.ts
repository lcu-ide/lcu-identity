import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatProgressSpinnerModule,
//   MatCheckboxModule,
//   MatStepperModule,
//   MatCardModule,
//   MatSlideToggleModule,
//   MatIconModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatSidenavModule,
//   MatToolbarModule,
//   MatListModule,
//   MatTabsModule,
//   MatSelectModule,
//   MatDialogModule,
//   MatTableModule,
//   MatSortModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatChipsModule,
//   MatMenuModule,
//   MatOptionModule,
//   MatDividerModule,
//   MatAutocompleteModule,
//   MatRadioModule,
//   MatSliderModule,
//   MatGridListModule,
//   MatExpansionModule,
//   MatButtonToggleModule,
//   MatTooltipModule} from '@angular/material';
import { SignInComponent } from './controls/sign-in/sign-in.component';
import { RegisterComponent } from './controls/register/register.component';
import { ForgotPasswordComponent } from './controls/forgot-password/forgot-password.component';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentityConfigManagerElementComponent } from './elements/identity-config-manager-element/identity-config-manager-element.component';
import { TermsConditionsComponent } from './controls/terms-conditions/terms-conditions.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent, TermsConditionsComponent],
  imports: [
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatCardModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatCheckboxModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatListModule,
    // MatTabsModule,
    // MatSelectModule,
    // MatProgressSpinnerModule,
    // MatDialogModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatChipsModule,
    // MatMenuModule,
    // MatOptionModule,
    // MatDividerModule,
    // MatAutocompleteModule,
    // MatRadioModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatGridListModule,
    // MatStepperModule,
    // MatExpansionModule,
    // MatButtonToggleModule,
    // MatTooltipModule,
    // BrowserAnimationsModule
  ],
  exports: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent, TermsConditionsComponent],
  entryComponents: [SignInComponent, RegisterComponent, ForgotPasswordComponent, IdentityConfigManagerElementComponent, TermsConditionsComponent]
})
export class LcuIdentityModule {}
