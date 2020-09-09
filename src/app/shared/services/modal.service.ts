import { Injectable } from '@angular/core';
import { BsModalService } from "ngx-bootstrap/modal";
import { ModalMessageComponent } from "../components/modal-message/modal-message.component";
import { Observable } from "rxjs";
import { ModalResponse } from "../interfaces/modal-response.enum";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  open(title: string, message: string, confirmButton?: string, cancelButton?: string): Observable<ModalResponse> {
    const initialState = {
      title,
      message,
      confirmButton,
      cancelButton
    }
    return this.modalService.show(ModalMessageComponent, { initialState }).content.response;
  }

  confirm(title: string, message: string) {
    return this.open(title, message, 'Confirmar', 'Cancelar');
  }

  info(title: string, message: string) {
    return this.open(title, message, null, 'Fechar');
  }
}
