import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargadepartamentoRoutingModule } from './cargadepartamento-routing.module';
import { CargadepartamentoComponent } from './cargadepartamento.component';


@NgModule({
  declarations: [
    CargadepartamentoComponent
  ],
  imports: [
    CommonModule,
    CargadepartamentoRoutingModule
  ]
})
export class CargadepartamentoModule { }
