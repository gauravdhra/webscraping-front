import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './common/high-court-header/header.component';
import { DistrictCourtsComponent } from './district-courts/district-courts/district-courts.component';
import { PoliceStationHeaderComponent } from './common/police-station-header/police-station-header.component';
import { TribunalsHeaderComponent } from './common/tribunals-header/tribunals-header.component';
import { SupremeCourtComponent } from './supreme-court/supreme-court.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'high-courts' },
  {
    path: 'high-courts',
    // canActivate: [AuthGuardUtil],
    component: HeaderComponent,
    data: { department: ['high-courts'] },
    children: [
      { path: '', loadChildren: () => import('./high-courts/high-courts.module').then(m => m.HighCourtsModule) }
    ]
  },
  {
    path: 'district-courts',
    // canActivate: [AuthGuardUtil],
    component: DistrictCourtsComponent,
    data: { department: ['district-courts'] },
  },

  {
    path: 'police-station',
    // canActivate: [AuthGuardUtil],
    component: PoliceStationHeaderComponent,
    data: { department: ['police-station'] },
    children: [
      { path: '', loadChildren: () => import('./police-station/police-station.module').then(m => m.PoliceStationModule) }
    ]
  },
  {
    path: 'tribunals',
    // canActivate: [AuthGuardUtil],
    component: TribunalsHeaderComponent,
    data: { department: ['tribunals'] },
    children: [
      { path: '', loadChildren: () => import('./tribunals/tribunals.module').then(m => m.TribunalsModule) }
    ]
  },
  {
    path: 'supreme-court',
    // canActivate: [AuthGuardUtil],
    component: SupremeCourtComponent,
    data: { department: ['supreme-court'] },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
