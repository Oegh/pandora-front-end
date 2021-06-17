import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstrategiasComponent } from './estrategias.component';

const routes: Routes = [{ path: '', component: EstrategiasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstrategiasRoutingModule { }
