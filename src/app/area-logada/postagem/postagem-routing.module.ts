import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';
import { PostagemComponent } from './postagem.component';

const routes: Routes = [
  {
    path: '',
    component: PostagemComponent,
  },{
    path: 'nova',
    component: NovaPostagemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagemRoutingModule { }
