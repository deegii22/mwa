import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersMarketRoutingModule } from './farmers-market-routing.module';
import { FarmersComponent } from './farmers.component';
import { FarmDetailsComponent } from './farm-details.component';

@NgModule({
  imports: [
    CommonModule,
    FarmersMarketRoutingModule
  ],
  declarations: [FarmersComponent, FarmDetailsComponent]
})
export class FarmersMarketModule { FarmersComponent }
