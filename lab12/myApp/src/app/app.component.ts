import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<mycomponent [myarray]=words></mycomponent>',
  styles: ['']
})
export class AppComponent {
  words: string[] = ["apple","google","facebook","amazon"];
  title = 'app';
}
