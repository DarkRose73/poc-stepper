import { Component, Input } from '@angular/core';
import { Step } from 'src/app/interfaces/step.interface';

@Component({
  selector: 'stepperv2',
  templateUrl: './stepperv2.component.html',
  styleUrls: ['./stepperv2.component.css'],
})
export class Stepperv2Component {
  @Input() stepList: Step[] = [];
}
