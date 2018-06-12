import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MondayComponent } from './monday.component';
import { TuesdayComponent } from './tuesday.component';
import { DdddDirective } from './dddd.directive';

@NgModule({
  declarations: [
    AppComponent,
    MondayComponent,
    TuesdayComponent,
    DdddDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
