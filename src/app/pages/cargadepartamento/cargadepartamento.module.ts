import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargadepartamentoRoutingModule } from './cargadepartamento-routing.module';
import { CargadepartamentoComponent, DialogAdicionarAsignatura, DialogOverviewExampleDialog } from './cargadepartamento.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CargadepartamentoComponent,
    DialogOverviewExampleDialog,
    DialogAdicionarAsignatura,
  ],
  imports: [
    CommonModule,
    CargadepartamentoRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class CargadepartamentoModule { }
