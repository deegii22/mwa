import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter counterValue="{{ ComponentCounterValue }}" (counterChange)="handleMe($event)"></app-counter>
  Component Counter Value = {{ ComponentCounterValue }}
  `,
  styles: [`app-counter{border: 1px solid orange; display: block; width: 200px; padding: 0px 10px; margin-bottom: 10px}`]
})
export class AppComponent {
  ComponentCounterValue: number = 5;
  handleMe(counterVal){
    this.ComponentCounterValue = counterVal;
  }
}
