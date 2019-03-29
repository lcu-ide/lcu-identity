import { Component } from '@angular/core';
import { RegisterModel } from '@lcu-ide/lcu-identity-common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  public HandleRegister(reg: RegisterModel) {
    alert('Register: ' + JSON.stringify(reg));
  }
}
