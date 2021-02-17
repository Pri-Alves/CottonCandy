import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../Shared/services/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: String, password: String): Observable<LoginResponse> {
    if (email === 'vitorfgsantos@outlook.com' && password ==='123') {
      return of({
        usuario: {
          nome: 'Vitor',
          cargo: 'Farias',
          email: 'vitorfgsantos@outlook.com',
        },
        token: 'aDrahabiAdGugiua16287',
      })
        .pipe(
          delay(2000),
          tap(response => {
            this.authService.setUsuario(response.usuario);
            this.authService.setToken(response.token)
          })
        );
    }
    
    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
    );
  }
}
