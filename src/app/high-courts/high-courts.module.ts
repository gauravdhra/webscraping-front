import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';




import { HighCourtsRoutingModule } from './high-courts-routing.module';
import { HaryanaPunjabComponent } from './haryana-punjab/haryana-punjab.component';
import { DelhiComponent } from './delhi/delhi.component';
import { AllahabadComponent } from './allahabad/allahabad.component';
import { BombayComponent } from './bombay/bombay.component';
import { CalcuttaComponent } from './calcutta/calcutta.component';
import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { PatnaComponent } from './patna/patna.component';
import { JammuKashmirComponent } from './jammu-kashmir/jammu-kashmir.component';
import { JharkhandComponent } from './jharkhand/jharkhand.component';
import { HimachalPradeshComponent } from './himachal-pradesh/himachal-pradesh.component';
import { GujratComponent } from './gujrat/gujrat.component';
import { ChhattisgarhComponent } from './chhattisgarh/chhattisgarh.component';
import { MadhyaPradeshComponent } from './madhya-pradesh/madhya-pradesh.component';
import { AndhraPradeshComponent } from './andhra-pradesh/andhra-pradesh.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MadrasComponent } from './madras/madras.component';
import { OrissaComponent } from './orissa/orissa.component';
import { SikkimComponent } from './sikkim/sikkim.component';
import { TripuraComponent } from './tripura/tripura.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { GuwahatiComponent } from './guwahati/guwahati.component';
import { ManipurComponent } from './manipur/manipur.component';
import { MeghalayaComponent } from './meghalaya/meghalaya.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';



@NgModule({
  declarations: [
    HaryanaPunjabComponent,
    DelhiComponent,
    AllahabadComponent,
    BombayComponent,
    CalcuttaComponent,
    UttarakhandComponent,
    RajasthanComponent,
    PatnaComponent,
    JammuKashmirComponent,
    JharkhandComponent,
    HimachalPradeshComponent,
    GujratComponent,
    ChhattisgarhComponent,
    MadhyaPradeshComponent,
    AndhraPradeshComponent,
    KeralaComponent,
    MadrasComponent,
    OrissaComponent,
    SikkimComponent,
    TripuraComponent,
    TelanganaComponent,
    GuwahatiComponent,
    ManipurComponent,
    MeghalayaComponent,
    KarnatakaComponent
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    HighCourtsRoutingModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class HighCourtsModule { }
