import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdSelectComponent } from "./cd-select/cd-select.component";
import { DropdownComponent } from './dropdown/dropdown.component';
import { DvdSelectComponent } from './dvd-select/dvd-select.component';


@NgModule({
  declarations: [
    AppComponent,
    CdSelectComponent,
    DropdownComponent,
    DvdSelectComponent,
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
