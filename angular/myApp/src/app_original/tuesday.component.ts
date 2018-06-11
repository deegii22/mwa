import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmbeddedTemplateAst } from '@angular/compiler';

@Component({
  selector: 'app-tuesday',
  template: `
    <p (click)="doSomething();">
      tuesday works!
    </p>
  `,
  styles: []
})
export class TuesdayComponent implements OnInit {
  @Output() onGraduation: EventEmitter<string> ;
  constructor() {
    this.onGraduation = new EventEmitter();
   }

   doSomething(){
    this.onGraduation.emit(`Hello from <p>`);
   }
  ngOnInit() {
    // this.onGraduation = new EventEmitter();
  }

}
