import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Client } from "../../interfaces/client.interface";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListComponent implements OnInit {

  cols = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
