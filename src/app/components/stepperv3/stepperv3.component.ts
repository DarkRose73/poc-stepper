import { Component } from '@angular/core';

@Component({
  selector: 'stepperv3',
  templateUrl: './stepperv3.component.html',
  styleUrls: ['./stepperv3.component.css'],
})
export class Stepperv3Component {
  public paso1Terminado: boolean = false;
  public paso2Terminado: boolean = false;

  finPaso1(e: boolean) {
    this.paso1Terminado = e;
  }

  finPaso2(e: boolean) {
    this.paso2Terminado = e;
  }
}
