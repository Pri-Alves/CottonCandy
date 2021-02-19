import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem, Usuario } from './perfil.interface';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  API_URL = environment.API_URL;
  

  constructor(private http: HttpClient) { }

  // consultar api
  public GetPerfilUsuario() {
    
    return this.http.get<Usuario>(this.API_URL + './usuario');
  }

  public GetPostagens(){
    return this.http.get<Postagem[]>(this.API_URL + './postagem');
  }
  

}
