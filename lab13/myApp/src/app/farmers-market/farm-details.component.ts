import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from './db.service';

@Component({
  selector: 'app-farm-details',
  template: `
    <h4>Farm Details</h4>
    {{farm.farm}}
    <ul>
      <li *ngFor="let p of farm.produce">{{p}}</li>
    </ul>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {
  private id: number;
  private farm: object;
  constructor(private route: ActivatedRoute, private dbService: DbService) {
    route.params.subscribe(params => {this.id = params['id'];})
    const farms = dbService.getData();
    for(let f of farms){
      if(this.id == f._id){
        this.farm = f;
      }
    }
   }

  ngOnInit() {
  }

}
