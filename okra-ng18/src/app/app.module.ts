import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OkraWidgetComponent } from './okra-widget/okra-widget.component';
import { OkraFormComponent } from './okra-form/okra-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OkraWidgetComponent,
    OkraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
