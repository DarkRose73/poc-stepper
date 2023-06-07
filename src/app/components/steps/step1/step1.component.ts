import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'steps-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component {
  public nombre: string = '';

  @Output() terminado = new EventEmitter<boolean>();

  ingresarNombre(value: string): void {
    this.nombre = value;
  }

  validarIngresoNombre() {
    if (this.nombre.length > 4) {
      this.terminado.emit(true);
    } else {
      this.terminado.emit(false);
    }
  }
}
