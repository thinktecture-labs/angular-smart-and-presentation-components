import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {CommonModule} from "@angular/common";
import {CdSelectComponent} from "./cd-select/cd-select.component";

@NgModule({
  declarations: [
    AppComponent,
    CdSelectComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
