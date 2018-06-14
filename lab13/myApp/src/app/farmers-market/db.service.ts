import { Injectable } from '@angular/core';

const FARMERS = [
  {_id:1, farm:'Natural Prairie', produce:['lettuce','tomato']},
  {_id:2, farm:'Good Prairie', produce:['spinach','carrot','garlic']},
]

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  constructor() { }

  getData(){
    return FARMERS;
  }
}
