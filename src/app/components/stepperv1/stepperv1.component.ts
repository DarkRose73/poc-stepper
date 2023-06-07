import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'stepperv1',
  templateUrl: './stepperv1.component.html',
  styleUrls: ['./stepperv1.component.css'],
})
export class Stepperv1Component {
  public paso1Terminado: boolean = false;
  public paso2Terminado: boolean = false;

  finPaso1(e: boolean) {
    this.paso1Terminado = e;
  }

  finPaso2(e: boolean) {
    this.paso2Terminado = e;
  }
}
