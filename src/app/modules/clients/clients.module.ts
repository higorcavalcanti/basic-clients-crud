import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { SharedModule } from "../../shared/shared.module";
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask";
import { NgBrazil } from "ng-brazil";


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil
  ]
})
export class ClientsModule { }
