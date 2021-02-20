import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  urlUsuario = "http://localhost:64667/api/Usuario/"

  usuario!: Usuario;
  userId!: Usuario["id"];
  token!: string;
  
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  
  setUserId(userId: Usuario["id"]){
    this.userId = userId;
    localStorage.setItem('userId', JSON.stringify(userId));
  }
  
  getUserId(_userId: Usuario["id"], _usuario: Usuario){
      const userIdGuardado = this.http.get(this.urlUsuario + {'id':this.userId},)
      console.log(userIdGuardado, 'usuario guardado' )
  }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
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
      console.log(this.token, "esta ok");
      return this.token;
    }
    console.log('tokenGuardado nulo')
    return 'null';
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
