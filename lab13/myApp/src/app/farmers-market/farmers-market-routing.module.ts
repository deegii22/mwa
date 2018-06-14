import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmDetailsComponent } from './farm-details.component';
import { MyGuard } from './my-guard.service';
import { NotfoundComponent } from './notfound.component';
import { FarmersComponent } from './farmers.component';

export const routes: Routes = [
  {path:'farmersMarket/farm/:id', 
    component: FarmDetailsComponent,
    canActivate: [MyGuard],
  },
  {
    path:'farmersMarket/notfound', 
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersMarketRoutingModule { }
