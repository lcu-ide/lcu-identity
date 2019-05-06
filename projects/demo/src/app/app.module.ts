import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LcuIdentityModule } from '@lcu-ide/lcu-identity-common';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

// settings.APIRoot = 'http://www.lowcodeunit.com';
// settings.APIRoot = 'http://www.habistack.com';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FathymSharedModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    LcuIdentityModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
