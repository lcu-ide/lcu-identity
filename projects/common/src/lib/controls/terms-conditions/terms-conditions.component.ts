import { TermsConditionsModel } from './../../models/terms-conditions.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lcu-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {

  /**
   * Input property for title
   */
  // tslint:disable-next-line:no-input-rename
  @Input('terms-condition-config')
  public TermsConditionConfig: Array<TermsConditionsModel>;

  /**
   * Input property for subtitle
   */
  // tslint:disable-next-line:no-input-rename
  @Input('sub-title')
  public SubTitle: string;

  /**
   * Input property for title
   */
  // tslint:disable-next-line:no-input-rename
  @Input('title')
  public Title: string;

  /**
 * Output event for showing terms
 */
  // tslint:disable-next-line:no-output-rename
  @Output('agree-to-terms')
  public AgreeToTerms: EventEmitter<boolean>;

  constructor() {
    this.AgreeToTerms = new EventEmitter<boolean>();
  }

/**
 * Handle agree or disagree to terms
 *
 * @param val boolean for agreeing to terms
 */
  public TermsConditionHandler(val: boolean): void {
    this.AgreeToTerms.emit(val);
  }
}
