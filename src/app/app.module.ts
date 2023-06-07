import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Stepperv1Component } from './components/stepperv1/stepperv1.component';
import { Step1Component } from './components/steps/step1/step1.component';
import { Step2Component } from './components/steps/step2/step2.component';
import { Step3Component } from './components/steps/step3/step3.component';
import { BotonesStepperComponent } from './components/botones-stepper/botones-stepper.component';
import { Stepperv2Component } from './components/stepperv2/stepperv2.component';
import { Stepperv3Component } from './components/stepperv3/stepperv3.component';
import { Step1v3Component } from './components/stepperv3/steps/step1v3/step1v3.component';
import { Step2v3Component } from './components/stepperv3/steps/step2v3/step2v3.component';

@NgModule({
  declarations: [
    AppComponent,
    Stepperv1Component,
    Step1Component,
    Step2Component,
    Step3Component,
    BotonesStepperComponent,
    Stepperv2Component,
    Stepperv3Component,
    Step1v3Component,
    Step2v3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
