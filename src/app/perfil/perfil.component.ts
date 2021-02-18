import { Component, OnInit } from '@angular/core';

import { PerfilService } from './perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ PerfilService ]
})
export class PerfilComponent implements OnInit {
  
  perfilUsuario = []
  listaPostagens = [
    'Post 1',
    'Post 2',
    'Post 3'
  ]

  exibirSeguir: boolean = true;
  
  alternar(){
    this.exibirSeguir = !this.exibirSeguir;
  }
  
  constructor( private perfilService: PerfilService) { }



  ngOnInit(): void {
    

  };
}
