import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { TribunalsRoutingModule } from './tribunals-routing.module';
import { GreenTribunalComponent } from './green-tribunal/green-tribunal.component';
import { ElectricityTribunalComponent } from './electricity-tribunal/electricity-tribunal.component';
import { RailwayTribunalComponent } from './railway-tribunal/railway-tribunal.component';


@NgModule({
  declarations: [GreenTribunalComponent, ElectricityTribunalComponent, RailwayTribunalComponent],
  imports: [
    CommonModule,
    TribunalsRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers:[DatePipe]
})
export class TribunalsModule { }
