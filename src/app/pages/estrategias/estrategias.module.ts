import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstrategiasRoutingModule } from './estrategias-routing.module';
import { EstrategiasComponent } from './estrategias.component';
import { MatTableModule } from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 






@NgModule({
  declarations: [
    EstrategiasComponent
  ],
  imports: [
    CommonModule,
    EstrategiasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class EstrategiasModule { }
