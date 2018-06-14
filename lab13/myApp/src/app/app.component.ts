import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['farmersMarket']">Farmers Market</a>  
    <a [routerLink]="['lazy']">Load Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: ['a{padding: 0 10px;}']
})
export class AppComponent {
  title = 'app';
}
