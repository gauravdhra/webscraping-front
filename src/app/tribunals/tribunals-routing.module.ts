import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreenTribunalComponent } from './green-tribunal/green-tribunal.component';


const routes: Routes = [
  { path: '', redirectTo: 'green-tribunal' },

  { path: 'green-tribunal',pathMatch: 'full', component: GreenTribunalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TribunalsRoutingModule { }
