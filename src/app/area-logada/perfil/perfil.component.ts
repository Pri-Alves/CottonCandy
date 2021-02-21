import { Component, OnInit } from '@angular/core';

import { PerfilService } from './perfil.service';
import { Info } from './perfil.interface';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ PerfilService ]
})
export class PerfilComponent implements OnInit {

  // usuario: Usuario;

  // listaPostagens: Postagem [];

  info: Info;
  id = "1";

  exibirSeguir: boolean = true;

  alternar(){
    this.exibirSeguir = !this.exibirSeguir;
  }

  //injetando dependencia do serviço
  constructor( 
    private perfilService: PerfilService
    ) { }

  ngOnInit() {

     this.perfilService.GetUsuarioIdPerfil(this.id)
     .subscribe(response => {
       console.log(response)
        this.info=response;
     });
  };
}