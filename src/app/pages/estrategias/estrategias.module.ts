import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstrategiasRoutingModule } from './estrategias-routing.module';
import { EstrategiasComponent } from './estrategias.component';


@NgModule({
  declarations: [
    EstrategiasComponent
  ],
  imports: [
    CommonModule,
    EstrategiasRoutingModule
  ]
})
export class EstrategiasModule { }
