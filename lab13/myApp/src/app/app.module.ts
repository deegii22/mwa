import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmersMarketModule } from './farmers-market/farmers-market.module';
import { FarmDetailsComponent } from './farmers-market/farm-details.component';
import { RouterModule } from '@angular/router';
import { FarmersComponent } from './farmers-market/farmers.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot([
      { path: 'farmersMarket', component: FarmersComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
