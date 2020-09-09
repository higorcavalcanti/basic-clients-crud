import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { State } from "../interfaces/state.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  readonly endpoint: string = '/api/states';

  constructor(
    public http: HttpClient
  ) { }

  all() {
    return this.http.get<State[]>(this.endpoint);
  }
}
