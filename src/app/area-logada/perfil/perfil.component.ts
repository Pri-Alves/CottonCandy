import { Component, OnInit } from '@angular/core';

import { PerfilService } from './perfil.service';
import { Info } from './perfil.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ PerfilService ]
})
export class PerfilComponent implements OnInit {

  usuario: any;
  userId: any;
  exibirSeguir: boolean = true;
  postagens: any;
  perfil: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal,
    private perfilService: PerfilService
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit da perfil")
    var token = localStorage.getItem('token');
    if (token !== null){
      this.authService.setToken(token);
    }

    this.userId = localStorage.getItem('userId');
    var resposta = localStorage.getItem('usuario')
    if(resposta !== null){
      
      this.usuario = JSON.parse(resposta)
      console.log(this.usuario);

      this.carregarPerfil();
    }
    else{
      console.log(" erro no ng Init do perfil ")
    }
  }

  alternar(){
    this.exibirSeguir = !this.exibirSeguir;
  }

  carregarPerfil() {
    var perfil = localStorage.getItem('perfil');
    if (perfil !== null){
      this.perfil = JSON.parse(perfil);
      this.postagens = this.perfil.postagens;
    }
  }
}