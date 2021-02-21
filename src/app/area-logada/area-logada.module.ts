import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptor } from '../Shared/interceptor/auth.interceptor';
import { SharedModule } from '../Shared/shared.module';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';





@NgModule({
  declarations: [
    AreaLogadaComponent,
    ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule,
    SharedModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class AreaLogadaModule { }
