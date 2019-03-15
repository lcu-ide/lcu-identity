import { Component, OnInit, Injector } from '@angular/core';
import { LcuElementComponent, LCUElementContext } from '@lcu-ide/common';

export class IdentityConfigManagerElementState {
  public Test: string;
}

export class IdentityConfigManagerContext extends LCUElementContext<IdentityConfigManagerElementState> {}

export const SELECTOR_IDENTITY_CONFIG_MANAGER_ELEMENT = 'lcu-identity-config-manager-element';

@Component({
  selector: SELECTOR_IDENTITY_CONFIG_MANAGER_ELEMENT,
  templateUrl: './identity-config-manager-element.component.html',
  styleUrls: ['./identity-config-manager-element.component.scss']
})
export class IdentityConfigManagerElementComponent extends LcuElementComponent<IdentityConfigManagerContext> implements OnInit {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods
}
