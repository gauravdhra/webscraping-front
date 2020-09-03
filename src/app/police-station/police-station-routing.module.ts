import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { AllahabadComponent } from './allahabad/allahabad.component';
// import { AndhraPradeshComponent } from './andhra-pradesh/andhra-pradesh.component';
import { DelhiComponent } from './delhi/delhi.component';
// import { HaryanaPunjabComponent } from './haryana-punjab/haryana-punjab.component';
// import { BombayComponent } from './bombay/bombay.component';
// import { CalcuttaComponent } from './calcutta/calcutta.component';
import { ChhattisgarhComponent } from './chhattisgarh/chhattisgarh.component';
// import { GuwahatiComponent } from './guwahati/guwahati.component';
// import { GujratComponent } from './gujrat/gujrat.component';
// import { HimachalPradeshComponent } from './himachal-pradesh/himachal-pradesh.component';
// import { JammuKashmirComponent } from './jammu-kashmir/jammu-kashmir.component';
// import { JharkhandComponent } from './jharkhand/jharkhand.component';
// import { KarnatakaComponent } from './karnataka/karnataka.component';
// import { KeralaComponent } from './kerala/kerala.component';
// import { MadrasComponent } from './madras/madras.component';
// import { ManipurComponent } from './manipur/manipur.component';
// import { MeghalayaComponent } from './meghalaya/meghalaya.component';
// import { MadhyaPradeshComponent } from './madhya-pradesh/madhya-pradesh.component';
// import { OrissaComponent } from './orissa/orissa.component';
// import { PatnaComponent } from './patna/patna.component';
// import { RajasthanComponent } from './rajasthan/rajasthan.component';
// import { TelanganaComponent } from './telangana/telangana.component';
// import { TripuraComponent } from './tripura/tripura.component';
// import { SikkimComponent } from './sikkim/sikkim.component';
// import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';


const routes: Routes = [
  { path: '', redirectTo: 'chhattisgarh' },
  // { path: 'allahabad', pathMatch: 'full',component: AllahabadComponent },
  // { path: 'andhra-pradesh', pathMatch: 'full',component: AndhraPradeshComponent },
  { path: 'delhi',pathMatch: 'full', component: DelhiComponent },
  // { path: 'haryana-punjab', component: HaryanaPunjabComponent },
  // { path: 'bombay',pathMatch: 'full', component: BombayComponent },
  // { path: 'calcutta',pathMatch: 'full', component: CalcuttaComponent },
  { path: 'chhattisgarh',pathMatch: 'full', component: ChhattisgarhComponent },
  // { path: 'guwahati',pathMatch: 'full', component: GuwahatiComponent },
  // { path: 'gujrat',pathMatch: 'full', component: GujratComponent },
  // { path: 'himachal-pradesh',pathMatch: 'full', component: HimachalPradeshComponent },
  // { path: 'jammu-kashmir',pathMatch: 'full', component: JammuKashmirComponent },
  // { path: 'jharkhand',pathMatch: 'full', component: JharkhandComponent },
  // { path: 'karnataka',pathMatch: 'full', component: KarnatakaComponent },
  // { path: 'kerala',pathMatch: 'full', component: KeralaComponent },
  // { path: 'madras',pathMatch: 'full', component: MadrasComponent },
  // { path: 'manipur',pathMatch: 'full', component: ManipurComponent },
  // { path: 'meghalaya',pathMatch: 'full', component: MeghalayaComponent },
  // { path: 'madhya-pradesh',pathMatch: 'full', component: MadhyaPradeshComponent },
  // { path: 'orissa',pathMatch: 'full', component: OrissaComponent },
  // { path: 'patna',pathMatch: 'full', component: PatnaComponent },
  // { path: 'rajasthan',pathMatch: 'full', component: RajasthanComponent },
  // { path: 'telangana',pathMatch: 'full', component: TelanganaComponent },
  // { path: 'tripura',pathMatch: 'full', component: TripuraComponent },
  // { path: 'sikkim',pathMatch: 'full', component: SikkimComponent },
  // { path: 'uttarakhand',pathMatch: 'full', component: UttarakhandComponent },
  // { path: '*',pathMatch: 'full',redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliceStationRoutingModule { }
