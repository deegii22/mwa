import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MyCustomHttpService } from './my-custom-http.service';
import { RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DataDrivenComponent },
      { path: 'thankyou', component: ThankyouComponent }
     ])
  ],
  providers: [MyCustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
