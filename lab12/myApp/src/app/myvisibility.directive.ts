import { Directive, Input, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  constructor() {}
  @Input('visibility') value: boolean;
  @HostBinding('style.display') display;
  ngOnInit(){ 
    if(this.value){
      this.display = "block";
    } else {
      this.display = "none";
    }
  }
}
