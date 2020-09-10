import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { UfSelectorComponent } from './components/uf-selector/uf-selector.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { ValidateControlDirective } from './directives/validate-control.directive';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';



@NgModule({
  declarations: [TableComponent, UfSelectorComponent, ModalMessageComponent, ValidateControlDirective, FormErrorComponent, FormErrorsComponent],
  exports: [
    TableComponent,
    UfSelectorComponent,
    ValidateControlDirective
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
