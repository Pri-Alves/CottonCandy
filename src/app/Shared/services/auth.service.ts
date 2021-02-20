import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuario!: Usuario;
  token!: string;
  
  constructor(
    private router: Router,
  ) { }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(){
    if (this.usuario){
      return this.usuario;
    }

    const usuaroiGuardado = localStorage.getItem('usuario');
    if (usuaroiGuardado){
      this.usuario = JSON.parse(usuaroiGuardado);
      return this.usuario;
    }
    return null;
  }

  setToken(token: string){
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(){
    if (this.token){
      return this.token;
    }

    const tokenGuardado = localStorage.getItem('token');
    if (tokenGuardado){
      this.token = tokenGuardado;
      return this.token;
    }
    return this.token;
  }

  estaLogado(): boolean {
   return this.getUsuario() && this.getToken() ? true : false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.usuario = null as any;
    this.token = null as any;

  }
}