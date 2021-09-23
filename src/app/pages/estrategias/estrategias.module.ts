import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstrategiasRoutingModule } from './estrategias-routing.module';
import { EstrategiasComponent } from './estrategias.component';
import { MatTableModule } from '@angular/material/table'; 


@NgModule({
  declarations: [
    EstrategiasComponent
  ],
  imports: [
    CommonModule,
    EstrategiasRoutingModule,
    MatTableModule
  ]
})
export class EstrategiasModule { }
