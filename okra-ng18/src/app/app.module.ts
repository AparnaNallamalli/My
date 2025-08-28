import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OkraWidgetComponent } from './okra-widget/okra-widget.component';
import { OkraFormComponent } from './okra-form/okra-form.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@NgModule({
  declarations: [
    AppComponent,
    OkraWidgetComponent,
    OkraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: {
        oktaAuth: new OktaAuth({
          issuer: 'https://{yourOktaDomain}/oauth2/default',
          clientId: '{yourClientId}',
          redirectUri: window.location.origin + '/login/callback',
          scopes: ['openid', 'profile', 'email']
        })
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
