import { Component, OnInit } from '@angular/core';
import { Client } from "../../interfaces/client.interface";
import { ClientService } from "../../services/client.service";
import { TableColumn } from "../../../../shared/interfaces/table-column.interface";
import { TableRequestOptions } from "../../../../shared/interfaces/table-request-options.interface";
import { TABLE_ROW_ACTIONS, TableRowAction } from "../../../../shared/interfaces/table-row-action.interface";
import { Router } from "@angular/router";
import { ModalService } from "../../../../shared/services/modal.service";
import { filter } from "rxjs/operators";
import { ModalResponse } from "../../../../shared/interfaces/modal-response.enum";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {

  columns: TableColumn[] = [
    { key: 'id', name: 'ID' },
    { key: 'nome', name: 'Nome' },
    { key: 'cpf', name: 'CPF' },
    { key: 'cep', name: 'CEP' },
    { key: 'logradouro', name: 'Logradouro' },
    { key: 'bairro', name: 'Bairro' },
    { key: 'localidade', name: 'Localidade' },
    { key: 'uf', name: 'UF' },
  ];

  clients: Client[];
  options: TableRequestOptions = {
    page: 1,
    limit: 12
  }
  isLoading: boolean = true;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.clientService.all( this.options ).subscribe(
      response => {
        this.options.total = parseInt( response?.headers?.get('x-total-count') );
        this.clients = response?.body;
        this.isLoading = false;
      },
      () => {
        debugger
        this.clients = null;
        this.isLoading = false;
      }
    );
  }

  actionClick(event: TableRowAction) {
    if ( event.action === TABLE_ROW_ACTIONS.EDIT ) {
      this.edit( event.item );
    } else if ( event.action === TABLE_ROW_ACTIONS.DELETE ) {
      this.remove(event.item);
    }
  }

  edit(item: Client) {
    this.router.navigate(['/clients/' + item.id]);
  }

  remove(item: Client) {
    const title = 'Apagar cliente';
    const message = 'Tem certeza que deseja remover este cliente?';
    this.modalService.confirm(title, message).pipe(
      filter(x => x === ModalResponse.CONFIRM)
    ).subscribe(() => {
      this.clientService.remove(item).subscribe(
        () => {
          this.loadData();
          this.modalService.info(title, 'Cliente removido com sucesso!');
        },
        () => {
          this.modalService.info(title, 'Falha ao remover cliente');
        }
      );
    });
  }
}
