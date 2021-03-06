import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  BsDropdownModule
} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { VehicleLocationService } from './vehicle-location.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgkqd2eu9Bk09LjWouGaZgvAeG7pXvPrc'
    }),
    HttpModule,
  ],
  providers: [VehicleLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
