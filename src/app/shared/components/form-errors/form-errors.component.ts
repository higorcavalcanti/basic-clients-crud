import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorMessages } from "../../interfaces/form-error-messages.interface";

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit {

  readonly MESSAGES: FormErrorMessages = {
    required: 'Este campo é obrigatório',
    cpf: 'CPF inserido é inválido',
    cep: 'CEP inserido é inválido',
  };

  @Input() form: FormControl;
  @Input() messages: FormErrorMessages;

  get errors(): Array<string> {
    if ( !this.form || !this.form.touched || !this.form.invalid || !this.form.errors ) {
      return [];
    }
    return Object.keys( this.form.errors )
      .map(error => this.getMessage( error ))
      .filter(x => x?.length);
  }

  private errorsWarned;

  constructor() { }

  ngOnInit() {
  }

  getMessage(error: string) {
    if ( this.messages?.hasOwnProperty( error ) ) {
      return this.messages[ error ];
    }
    if ( this.MESSAGES.hasOwnProperty( error ) ) {
      return this.MESSAGES[ error ];
    }
    this.warn(error);
    return null;
  }

  warn(error: string) {
    if ( !this.errorsWarned ) {
      this.errorsWarned = {};
    }
    if ( !this.errorsWarned[ error ] ) {
      console.warn('Error "' + error + '" is not defined! You can define it in object "MESSAGES" at "form-errors.component.ts"');
      this.errorsWarned[ error ] = true;
    }
  }

}
