import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

export class MyGuard implements CanActivate{
  private id: number;
  private activatedRoute: ActivatedRoute;
  private dbService: DbService
  private router: Router
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | boolean{
    this.activatedRoute.params.subscribe(params => {this.id = params['id'];})

    const farms = this.dbService.getData();
    for(let f of farms){
      if(this.id != f._id){
        this.router.navigate(['notfound']);
        return true;
      }
    }
    return false
  }

  
}
