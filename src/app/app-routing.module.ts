import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstaLogadoGuard } from './Shared/Guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './Shared/Guards/nao-esta-logado/nao-esta-logado.guard';


const routes: Routes = [{
  path:'',
  loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
  canActivate: [EstaLogadoGuard],
},{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'postagem',
  loadChildren: () => import('./area-logada/postagem/postagem.module').then(m => m.PostagemModule)
},
// {
// path: 'home', 
//   //loadChildren: () => import('./area-logada/home/home.module').then(m => m.HomeModule)
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
