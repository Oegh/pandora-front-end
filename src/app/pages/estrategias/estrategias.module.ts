import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstrategiasRoutingModule } from './estrategias-routing.module';
import { EstrategiasComponent } from './estrategias.component';
import { MatTableModule } from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    EstrategiasComponent
  ],
  imports: [
    CommonModule,
    EstrategiasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class EstrategiasModule { }
