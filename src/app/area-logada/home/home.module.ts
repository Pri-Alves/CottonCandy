import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from 'src/app/Shared/interceptor/auth.interceptor';

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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class HomeModule { }

