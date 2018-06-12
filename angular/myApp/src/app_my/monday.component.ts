import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-monday',
  template: `

    <!--<p>
      monday works!
    </p>
    <h1>{{myname}}</h1>
    (input) ="myname=myinput.value"-->
    <input #myinput type="text" placeholder="input something ..." value="{{myname}}"/>
    <p>
      <!--<ng-content></ng-content>-->
      <button (click)="doSomething()">Click me</button>
    </p>
  `,
  styles: ['p{color: green}'],
  encapsulation: ViewEncapsulation.Native
})
export class MondayComponent{
  @Input() myname;
  @ViewChild('myinput') myDomInputElement;
  /*doSomething(){
    console.log(this.myDomInputElement.nativeElement.value);
  }
   ng g c tuesday --flat -s -t --spec false*/
}
