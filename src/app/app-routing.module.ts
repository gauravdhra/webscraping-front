import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelhiComponent } from './courts/delhi/delhi.component';
import { HaryanaPunjabComponent } from './courts/haryana-punjab/haryana-punjab.component';
import { AllahabadComponent } from './courts/allahabad/allahabad.component';
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
import { KarnatakaComponent } from './courts/karnataka/karnataka.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'haryana-punjab' },
  { path: 'allahabad', pathMatch: 'full',component: AllahabadComponent },
  { path: 'andhra-pradesh', pathMatch: 'full',component: AndhraPradeshComponent },
  { path: 'delhi',pathMatch: 'full', component: DelhiComponent },
  { path: 'haryana-punjab',pathMatch: 'full', component: HaryanaPunjabComponent },
  { path: 'bombay',pathMatch: 'full', component: BombayComponent },
  { path: 'calcutta',pathMatch: 'full', component: CalcuttaComponent },
  { path: 'chhattisgarh',pathMatch: 'full', component: ChhattisgarhComponent },
  { path: 'guwahati',pathMatch: 'full', component: GuwahatiComponent },
  { path: 'gujrat',pathMatch: 'full', component: GujratComponent },
  { path: 'himachal-pradesh',pathMatch: 'full', component: HimachalPradeshComponent },
  { path: 'jammu-kashmir',pathMatch: 'full', component: JammuKashmirComponent },
  { path: 'jharkhand',pathMatch: 'full', component: JharkhandComponent },
  { path: 'karnataka',pathMatch: 'full', component: KarnatakaComponent },
  { path: 'kerala',pathMatch: 'full', component: KeralaComponent },
  { path: 'madras',pathMatch: 'full', component: MadrasComponent },
  { path: 'manipur',pathMatch: 'full', component: ManipurComponent },
  { path: 'meghalaya',pathMatch: 'full', component: MeghalayaComponent },
  { path: 'madhya-pradesh',pathMatch: 'full', component: MadhyaPradeshComponent },
  { path: 'orissa',pathMatch: 'full', component: OrissaComponent },
  { path: 'patna',pathMatch: 'full', component: PatnaComponent },
  { path: 'rajasthan',pathMatch: 'full', component: RajasthanComponent },
  { path: 'telangana',pathMatch: 'full', component: TelanganaComponent },
  { path: 'tripura',pathMatch: 'full', component: TripuraComponent },
  { path: 'sikkim',pathMatch: 'full', component: SikkimComponent },
  { path: 'uttarakhand',pathMatch: 'full', component: UttarakhandComponent },
  // { path: '*',pathMatch: 'full',redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
