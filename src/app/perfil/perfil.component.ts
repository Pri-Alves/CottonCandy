import { Component, OnInit } from '@angular/core';

import { PerfilService } from './perfil.service';
import { Usuario } from './perfil.interface';
import { Postagem } from './perfil.interface';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ PerfilService ]
})
export class PerfilComponent implements OnInit {
  
  usuarios: Usuario [];

  listaPostagens: Postagem [];
  

  exibirSeguir: boolean = true;
  
  alternar(){
    this.exibirSeguir = !this.exibirSeguir;
  }
  
  //injetando dependencia do serviço
  constructor( 
    private perfilService: PerfilService
    ) { }

  ngOnInit() {
     this.perfilService.GetPostagens()
     .subscribe(response => {
        this.listaPostagens = response
     });

    this.perfilService.GetPerfilUsuario();
  };
}
