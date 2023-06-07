import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-botones-stepper',
  templateUrl: './botones-stepper.component.html',
  styleUrls: ['./botones-stepper.component.css'],
})
export class BotonesStepperComponent {
  @Output() reiniciarStepper = new EventEmitter<any>();

  resetStepper() {
    this.reiniciarStepper.emit();
  }
}
