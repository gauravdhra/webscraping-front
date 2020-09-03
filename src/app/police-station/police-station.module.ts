import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { PoliceStationRoutingModule } from './police-station-routing.module';
import { ChhattisgarhComponent } from './chhattisgarh/chhattisgarh.component';
import { DelhiComponent } from './delhi/delhi.component';


@NgModule({
  declarations: [
    ChhattisgarhComponent,
    DelhiComponent
  ],
  providers:[DatePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PoliceStationRoutingModule
  ]
})
export class PoliceStationModule { }
