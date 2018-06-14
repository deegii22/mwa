import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  template: `
    <div class="container text-success" style="margin-top:30px">
      Thank you :)
    </div>
  `,
  styles: []
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
