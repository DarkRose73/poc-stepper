import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'steps-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component {
  @Output() terminado = new EventEmitter<boolean>();

  public valorToggle = false;

  cambiarToggle(): void {
    this.valorToggle = !this.valorToggle;
  }
}
