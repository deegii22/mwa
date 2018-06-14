import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersMarketRoutingModule } from './farmers-market-routing.module';
import { FarmersComponent } from './farmers.component';
import { FarmDetailsComponent } from './farm-details.component';
import { DbService } from './db.service';
import { NotfoundComponent } from './notfound.component';
import { MyGuard } from './my-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FarmersMarketRoutingModule
  ],
  declarations: [FarmersComponent, FarmDetailsComponent, NotfoundComponent],
  providers: [DbService, MyGuard],
  bootstrap: [FarmersComponent]
})
export class FarmersMarketModule { FarmersComponent }
