import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from as fromPromise, Observable} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {cabecalho: String;}

  cabecalho = "";

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //  this.cabecalho = "Bearer " + this.authService.getToken()
     request = request.clone({
       
      // headers: request.headers.set('Authorization', this.authService.getToken()),
      setHeaders: {
        Authorization: this.authService.getToken(),
      }
    });
    // return fromPromise(this.authService.getToken()).switchMap((token: String) => {
    //   const requestClone = request.clone({
    //       setHeaders: {
    //           Authorization: `Bearer ${token}`
    //       }
    //   });
    return next.handle(request);
  }
}
