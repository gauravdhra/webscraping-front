import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreenTribunalComponent } from './green-tribunal/green-tribunal.component';
import { ElectricityTribunalComponent } from './electricity-tribunal/electricity-tribunal.component';
import { RailwayTribunalComponent } from './railway-tribunal/railway-tribunal.component';


const routes: Routes = [
  { path: '', redirectTo: 'green-tribunal' },

  { path: 'green-tribunal',pathMatch: 'full', component: GreenTribunalComponent },
  { path: 'electricity-tribunal',pathMatch: 'full', component: ElectricityTribunalComponent },
  { path: 'railway-tribunal',pathMatch: 'full', component: RailwayTribunalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TribunalsRoutingModule { }
