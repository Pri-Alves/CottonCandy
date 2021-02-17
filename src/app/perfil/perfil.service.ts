import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  // consultar api
  public GetPerfilUsuario(): Array<String> {
    let perfilUsuario = [ "nome", "email", "DataNascimento"]
    return perfilUsuario
  }

  public GetPostagem(): Array<String> {
    let postagem = ["Postagem1", "Postagem2" ]
    return postagem
  }

  constructor() { }
}
