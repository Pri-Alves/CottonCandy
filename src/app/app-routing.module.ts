import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEstaLogadoGuard } from './Shared/Guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
