import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  urlUsuario = "http://localhost:5000/api/Usuario/";
  userIdGuardado!: Usuario;
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
  
  getUsuarioById(_userId: string) {
      return this.http.get(this.urlUsuario + _userId)
      // .subscribe(
      //   _response => {
      //     console.log("a resposta foi: ")
      //     console.log(_response)
      //     const resposta = _response
      //     console.log(typeof(resposta))
          
      //     return resposta


          // this.userIdGuardado.id = resposta.id
          // if(this.userIdGuardado){
          //   this.userIdGuardado.nome
          //   return this.userIdGuardado
          // }
          // else{
          //     return null;
          // }
          
      //   }
      // )
      // console.log(this.userIdGuardado.nome, 'usuario guardado' )
      // return this.userIdGuardado
  }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  // getUsuario(){
  //   if (this.usuario){
  //     return this.usuario;
  //   }

  //   const usuaroiGuardado = localStorage.getItem('usuario');
  //   if (usuaroiGuardado){
  //     this.usuario = JSON.parse(usuaroiGuardado);
  //     return this.usuario;
  //   }
  //   return null;
  // }

  getUsuario(){
    return this.userIdGuardado
  }

  setToken(token: string){
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(){
    if (this.token){
      console.log("tem token")
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
   return (this.getUsuario()!== null) && (this.getToken()!== null) ? true : false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.usuario = null as any;
    this.token = null as any;

  }
}
