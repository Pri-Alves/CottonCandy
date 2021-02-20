import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';


@NgModule({
  declarations: [
    PostagemComponent,
    NovaPostagemComponent,
  ],
  imports: [
    CommonModule,
    PostagemRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PostagemComponent,
    NovaPostagemComponent
  ]
})
export class PostagemModule { }
