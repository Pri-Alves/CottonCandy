import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/Shared/interceptor/auth.interceptor';

import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';
import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem.component';


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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class PostagemModule { }
