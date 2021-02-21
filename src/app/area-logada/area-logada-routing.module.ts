import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './area-logada.component';

const routes: Routes = [{
  path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},{
  path: '',
  component: AreaLogadaComponent,
  children: [{
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  }, {
    path:'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaLogadaRoutingModule { }
