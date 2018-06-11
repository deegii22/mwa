import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter counter="{{ ComponentCounterValue }}" (counterChange)="ComponentCounterValue=$event"></app-counter>
  Component Counter Value = {{ ComponentCounterValue }}
  `,
  styles: [`app-counter{border: 1px solid orange; display: block; width: 220px; padding: 0px 10px; margin-bottom: 10px}`]
})
export class AppComponent {
  ComponentCounterValue: number = 5;
}
