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
  postagens = []
  
  constructor( private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilService.GetPerfilUsuario(),
    this.perfilService.GetPostagem()
  }

}
