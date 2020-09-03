import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HaryanaPunjabComponent } from './courts/haryana-punjab/haryana-punjab.component';
import { DelhiComponent } from './courts/delhi/delhi.component';
import { AllahabadComponent } from './courts/allahabad/allahabad.component';
import { HeaderComponent } from './common/header/header.component';
import { BombayComponent } from './courts/bombay/bombay.component';
import { CalcuttaComponent } from './courts/calcutta/calcutta.component';
import { UttarakhandComponent } from './courts/uttarakhand/uttarakhand.component';
import { RajasthanComponent } from './courts/rajasthan/rajasthan.component';
import { PatnaComponent } from './courts/patna/patna.component';
import { JammuKashmirComponent } from './courts/jammu-kashmir/jammu-kashmir.component';
import { JharkhandComponent } from './courts/jharkhand/jharkhand.component';
import { HimachalPradeshComponent } from './courts/himachal-pradesh/himachal-pradesh.component';
import { GujratComponent } from './courts/gujrat/gujrat.component';
import { ChhattisgarhComponent } from './courts/chhattisgarh/chhattisgarh.component';
import { MadhyaPradeshComponent } from './courts/madhya-pradesh/madhya-pradesh.component';
import { AndhraPradeshComponent } from './courts/andhra-pradesh/andhra-pradesh.component';
import { KeralaComponent } from './courts/kerala/kerala.component';
import { MadrasComponent } from './courts/madras/madras.component';
import { OrissaComponent } from './courts/orissa/orissa.component';
import { SikkimComponent } from './courts/sikkim/sikkim.component';
import { TripuraComponent } from './courts/tripura/tripura.component';
import { TelanganaComponent } from './courts/telangana/telangana.component';
import { GuwahatiComponent } from './courts/guwahati/guwahati.component';
import { ManipurComponent } from './courts/manipur/manipur.component';
import { MeghalayaComponent } from './courts/meghalaya/meghalaya.component';
import { KarnatakaComponent } from './courts/karnataka/karnataka.component'

@NgModule({
  declarations: [
    AppComponent,
    HaryanaPunjabComponent,
    DelhiComponent,
    AllahabadComponent,
    HeaderComponent,
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
