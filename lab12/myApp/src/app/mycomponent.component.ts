import { Component, OnInit, Input,  } from '@angular/core';

@Component({
  selector: 'mycomponent',
  template: `
    <ul appUpper>
      <li #myColor appMycolor appMyvisibility [visibility]="true" *ngFor="let letter of myarray; let num = index" (color)="printColor($event)">{{ num+1 }} - {{ letter }} ({{myColor.style.color}})</li>
    </ul>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {
  @Input() myarray;

  constructor() { }

  ngOnInit() {
  }

}
