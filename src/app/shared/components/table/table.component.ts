import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { TableColumn } from "../../interfaces/table-column.interface";
import { TableRequestOptions } from "../../interfaces/table-request-options.interface";
import { TABLE_ROW_ACTIONS, TableRowAction } from "../../interfaces/table-row-action.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  @Input() columns: TableColumn[];
  @Input() data: any[];

  @Input() options: TableRequestOptions;
  @Output() optionsChange: EventEmitter<TableRequestOptions> = new EventEmitter<TableRequestOptions>();

  @Input() actions: boolean = true;
  @Input() pagination: boolean = true;
  @Input() loading: boolean = false;

  @Output() actionClick: EventEmitter<TableRowAction> = new EventEmitter<TableRowAction>();

  constructor() { }

  updateOptions(options: TableRequestOptions) {
    this.options = options;
    this.optionsChange.emit(options);
  }

  pageChanged(event) {
    this.options.page = event.page;
    this.updateOptions( this.options );
  }

  edit(item) {
    this.actionClick.emit({
      item,
      action: TABLE_ROW_ACTIONS.EDIT
    });
  }

  delete(item) {
    this.actionClick.emit({
      item,
      action: TABLE_ROW_ACTIONS.DELETE
    });
  }
}
