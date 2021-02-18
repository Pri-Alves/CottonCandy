import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from './perfil.interface';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  

  constructor(private http: HttpClient) { }

  // consultar api
  public GetPerfilUsuario(): Array<String> {
    
    return this.http.get<Usuario>('');
  }

  public GetPostagens(){
    return this.http.get<Postagem>('');
  }
  

}
