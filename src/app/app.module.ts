import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { DefaultLayoutComponent } from './core/containers/default-layout/default-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgBrazil } from 'ng-brazil';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgBrazil,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
