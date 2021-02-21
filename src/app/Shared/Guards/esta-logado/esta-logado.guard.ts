import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){  }
  
  canActivate(): boolean {
    const estaLogado = this.authService.estaLogado();
    
    if(estaLogado){
      return true;
    }
    console.log("Nao está logado")
    this.router.navigate(['login']);
    return false;
  }
  
}
