import { Component, OnInit } from '@angular/core';

import { PerfilService } from '../../perfil/perfil.service';
import { Info } from '../../perfil/perfil.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil-home',
  templateUrl: './perfil-home.component.html',
  styleUrls: ['./perfil-home.component.css'],
  providers: [ PerfilService ]
})
export class PerfilHomeComponent implements OnInit {
  usuario: any;
  
  userId: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit da perfil")
    this.userId = localStorage.getItem('userId');
    var resposta = localStorage.getItem('usuario')
    if(resposta !== null){
      
      this.usuario = JSON.parse(resposta)
      
    }
    else{
      console.log(" erro no ng Init do perfil ")
    }
  }

  abrirPerfil (){
    this.router.navigate(['perfil']);
  }
}

