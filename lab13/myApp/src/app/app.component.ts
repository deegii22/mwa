import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['farmersMarket']">Farmers Market</a>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'app';
}
