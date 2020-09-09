import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { UfSelectorComponent } from './components/uf-selector/uf-selector.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalMessageComponent } from './components/modal-message/modal-message.component';



@NgModule({
  declarations: [TableComponent, UfSelectorComponent, ModalMessageComponent],
  exports: [
    TableComponent,
    UfSelectorComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
