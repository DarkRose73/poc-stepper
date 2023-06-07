import { Component } from '@angular/core';
import { Step } from './interfaces/step.interface';
import { Step1Component } from './components/steps/step1/step1.component';
import { Step2Component } from './components/steps/step2/step2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stepper';

  public stepList: Step[] = [
    {
      completed: false,
      editable: false,
      label: 'paso 1',
      optional: false,
      component: Step1Component,
    },
    {
      completed: false,
      editable: false,
      label: 'paso 2',
      optional: false,
      component: Step2Component,
    },
  ];
}
