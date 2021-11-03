import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MasterComponent } from './master/master.component';
import {button-component} from './button-component/button-component.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MasterComponent,
    button-component
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
