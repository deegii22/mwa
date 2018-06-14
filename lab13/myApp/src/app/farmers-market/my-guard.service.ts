import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from './db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyGuard implements CanActivate{
  
  constructor(private router: Router, private dbService: DbService){}
  canActivate(route: ActivatedRouteSnapshot){
    var id = parseInt(route.params.id);
    const farms = this.dbService.getData();
    const ids: number[] = farms.map(f => f._id);
    
    if(ids.indexOf(id) > -1){
      return true;
    }
    this.router.navigateByUrl('/farmersMarket/notfound');
    return false;
  }

  
}
