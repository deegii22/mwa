import { Directive, HostListener, ElementRef, Renderer, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  private myColors: string[] = ["green","red","orange","blue","yellow"]; 
  private index = 0;
  @Output() color = new EventEmitter();
  constructor(private e: ElementRef, private r: Renderer) { }
  @HostListener('click') foo(){ 
    this.e.nativeElement.style.color = this.myColors[++this.index % (this.myColors.length)];
    this.color.emit(this.e.nativeElement.style.color);
  }
}
