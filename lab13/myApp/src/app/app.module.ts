import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FarmersMarketModule } from './farmers-market/farmers-market.module';
import { FarmDetailsComponent } from './farmers-market/farm-details.component';
import { RouterModule, ROUTES } from '@angular/router';
import { FarmersComponent } from './farmers-market/farmers.component';
import { routes } from './farmers-market/farmers-market-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot([
      { path: 'farmersMarket', component: FarmersComponent },
      { path: 'lazy', loadChildren: './farmers-market/farmers-market.module#FarmersMarketModule'},
      { path: 'farmersMarket/farm', children: routes },
      { path: 'farmersMarket/notfound', children: routes }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
