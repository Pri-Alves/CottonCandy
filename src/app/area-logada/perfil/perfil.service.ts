import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Info } from './perfil.interface';

// import { Postagem, Usuario } from './perfil.interface';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  API_URL = environment.API_URL;


  constructor(private http: HttpClient) { }

  // consultar api


  public GetUsuarioIdPerfil(id : String) {

    return this.http.get<Info>(this.API_URL + '/usuario/'+ id);

  }

}