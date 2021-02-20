import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostagemModule } from '../postagem/postagem.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PerfilHomeComponent } from './perfil-home/perfil-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostagemModule
  ]
})
export class HomeModule { }

