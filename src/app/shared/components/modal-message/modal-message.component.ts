import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { ModalResponse } from "../../interfaces/modal-response.enum";

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit, OnDestroy {

  response: Subject<ModalResponse> = new Subject<ModalResponse>();

  title: string;
  message: string;
  cancelButton: string;
  confirmButton: string;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.response.complete();
  }

  cancel() {
    this.response.next(ModalResponse.CANCEL);
    this.close();
  }

  confirm() {
    this.response.next(ModalResponse.CONFIRM);
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }
}
