import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<h1>Welcome to myApp {{ title }}</h1>
    <p>Aaaaaa</p>-->
    {{ title}}
    <app-monday [myname]="title">Saruul</app-monday><app-tuesday (onGraduation)="handleMe($event)"></app-tuesday>
    `,
  styles: ['h1{ color: red}']
})
export class AppComponent {
  title = 'Munkhdelger';
  handleMe(text){
    this.title = text;
  }
}
