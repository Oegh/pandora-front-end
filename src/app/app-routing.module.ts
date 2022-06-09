import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
/* import { AuthGuard } from './core/guards/auth.guard'; */

const routes: Routes = [
  //{ path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
/*   { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canLoad: [AuthGuard] }, */
  { path: 'cargadepartamento', loadChildren: () => import('./pages/cargadepartamento/cargadepartamento.module').then(m => m.CargadepartamentoModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
