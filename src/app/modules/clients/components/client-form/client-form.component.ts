import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "../../interfaces/client.interface";
import { ClientService } from "../../services/client.service";
import { ModalService } from "../../../../shared/services/modal.service";
import { filter } from "rxjs/operators";
import { ModalResponse } from "../../../../shared/interfaces/modal-response.enum";
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  public readonly MASKS = MASKS;

  form: FormGroup;

  client_id;
  client: Client;
  loading: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public clientService: ClientService,
    public modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.listenToRouteData();
  }

  createForm() {
    this.form = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cpf': [null, [Validators.required, NgBrazilValidators.cpf]],
      'cep': [null, [Validators.required, NgBrazilValidators.cep]],
      'logradouro': [null, Validators.required],
      'bairro': [null, Validators.required],
      'localidade': [null, Validators.required],
      'uf': [null, Validators.required],
    });
  }

  loadClient() {
    if ( !this.client_id ) {
      return;
    }
    this.loading = true;
    this.clientService.get( this.client_id ).subscribe(
      client => {
      this.client = client;
      this.form.patchValue( this.client );
      this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  listenToRouteData() {
    this.route.params.subscribe(params => {
      this.client_id = params.id;
      if ( this.client_id ) {
        this.loadClient();
      }
    });
  }

  save() {

    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }

    const client: Client = Object.create({});
    Object.assign(client, this.client, this.form.getRawValue());

    if ( this.client_id ) {
      this.updateClient( client );
    } else {
      this.createClient( client );
    }
  }

  updateClient(client: Client) {
    const title = 'Salvar cliente';
    const message = 'Tem certeza que deseja editar esse cliente?';
    this.modalService.confirm(title, message).pipe(
      filter(x => x === ModalResponse.CONFIRM)
    ).subscribe(() => {
      this.clientService.update(client).subscribe(
        () => {
          this.goList();
          this.modalService.info(title, 'Cliente editado com sucesso!');
        },
        () => this.modalService.info(title, 'Falha ao editar cliente!')
      );
    })
  }

  createClient(client: Client) {
    this.clientService.create(client).subscribe(() => {
      this.goList();
      this.modalService.info('Salvar cliente', 'Cliente criado com sucesso!');
    });
  }

  goList() {
    this.router.navigate(['/clients']);
  }
}
