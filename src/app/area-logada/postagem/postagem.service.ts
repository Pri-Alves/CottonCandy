import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Postagem } from './postagem.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getPostagens() {
    return this.http.get<Postagem[]>(this.API_URL + '/Postagem');
  }

  getPostagem(id: string) {
    return this.http.get<Postagem>(this.API_URL + '/Postagem/' + id);
  }

  criarPostagem(texto: String, fotoPost:String ) {
     this.http.post(this.API_URL + '/Postagem', {
    'texto': texto,
    'fotoPost': fotoPost
    });
  }
  
/* 
  updateContato(id: string, contato: Contato) {
    return this.http.put<Contato>(this.API_URL + '/contatos/' + id, contato);
  }

  deleteContato(id: string) {
    return this.http.delete<Contato>(this.API_URL + '/contatos/' + id);
  } */

}