import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-farmers',
  template: `
    <h4>Farm list</h4>
    <ul>
      <li *ngFor="let f of farmers">
        <a [routerLink]="['farm', f._id]">{{f.farm}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FarmersComponent implements OnInit {
  private farmers: object[];
  constructor(private dbService: DbService) {
    this.farmers = dbService.getData();
  }

  ngOnInit() {
  }

}
