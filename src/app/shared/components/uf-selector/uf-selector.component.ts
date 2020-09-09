import { Component, OnInit, Self } from '@angular/core';
import { StateService } from "../../services/state.service";
import { Observable } from "rxjs";
import { State } from "../../interfaces/state.interface";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: 'app-uf-selector',
  templateUrl: './uf-selector.component.html',
  styleUrls: ['./uf-selector.component.scss'],
})
export class UfSelectorComponent implements OnInit, ControlValueAccessor {

  states$: Observable<State[]>;

  propagateChange = (_: any) => {};
  propagateTouched = (_: any) => {};

  constructor(
    private stateService: StateService,
    @Self() public ngControl: NgControl,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.states$ = this.stateService.all();
  }

  writeValue(value: any) { }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.propagateTouched = fn;
  }
}
