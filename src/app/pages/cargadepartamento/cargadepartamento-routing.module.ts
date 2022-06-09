import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargadepartamentoComponent } from './cargadepartamento.component';

const routes: Routes = [{ path: '', component: CargadepartamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargadepartamentoRoutingModule { }
