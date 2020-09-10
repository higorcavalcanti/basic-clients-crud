import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormErrorsComponent } from "../components/form-errors/form-errors.component";
import { FormErrorMessages } from "../interfaces/form-error-messages.interface";

@Directive({
  selector: '[appValidateControl][formControlName]'
})
export class ValidateControlDirective implements OnInit, OnDestroy {

  @Input() appValidateControl: FormErrorMessages;

  private componentRef: ComponentRef<FormErrorsComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef,
    private control: NgControl,
  ) { }

  ngOnInit() {
    this.createComponent();
  }

  ngOnDestroy() {
    this.destroyComponent();
  }

  createComponent() {
    debugger
    this.viewContainer.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(FormErrorsComponent);
    this.componentRef = this.viewContainer.createComponent(factory);
    this.componentRef.instance.form = this.control.control as FormControl;
    this.componentRef.instance.messages = this.appValidateControl;
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

}
