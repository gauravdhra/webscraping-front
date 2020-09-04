import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/high-court-header/header.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { DistrictCourtsComponent } from './district-courts/district-courts/district-courts.component';
import { PoliceStationHeaderComponent } from './common/police-station-header/police-station-header.component';
import { SupremeCourtComponent } from './supreme-court/supreme-court.component';
import { TribunalsHeaderComponent } from './common/tribunals-header/tribunals-header.component';




@NgModule({
  declarations: [
    DistrictCourtsComponent,
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    PoliceStationHeaderComponent,
    SupremeCourtComponent,
    TribunalsHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
