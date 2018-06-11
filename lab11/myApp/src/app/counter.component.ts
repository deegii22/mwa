import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      CounterComponent: 
      <button (click)="decrease()">-</button>
      {{ counterValue }}
      <button (click)="increase()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter;
  counterValue: number;
  @Output() counterChange: EventEmitter<number> ;
  constructor() { 
    this.counterChange = new EventEmitter();
  }
  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  ngOnInit() {
    this.counterValue = parseInt(this.counter);
  }

}
