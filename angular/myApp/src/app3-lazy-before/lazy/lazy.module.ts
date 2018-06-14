import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

export const LAZY_ROUTES = [{ path: '', component: LazyComponent }];

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule {}
