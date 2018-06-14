import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import {LazyModule, LAZY_ROUTES} from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    LazyModule,
    RouterModule.forRoot([
     { path: '', component: HomeComponent },
     { path: 'lazy', children: LAZY_ROUTES }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
