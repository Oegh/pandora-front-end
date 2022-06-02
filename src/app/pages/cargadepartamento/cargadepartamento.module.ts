import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargadepartamentoRoutingModule } from './cargadepartamento-routing.module';
import { CargadepartamentoComponent } from './cargadepartamento.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CargadepartamentoComponent
  ],
  imports: [
    CommonModule,
    CargadepartamentoRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
  ]
})
export class CargadepartamentoModule { }
