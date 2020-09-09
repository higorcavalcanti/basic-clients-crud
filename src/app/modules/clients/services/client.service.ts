import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from "../interfaces/client.interface";
import { BaseCrudServiceService } from "../../../shared/services/base-crud-service.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseCrudServiceService<Client> {

  readonly endpoint = '/api/clients/';

  constructor( http: HttpClient ) {
    super(http);
  }

  update(client: Client) {
    return super.update( client.id, client );
  }

  remove(client: Client) {
    return super.remove( client.id );
  }
}
