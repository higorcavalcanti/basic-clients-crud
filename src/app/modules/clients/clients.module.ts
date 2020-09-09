import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
