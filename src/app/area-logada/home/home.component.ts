import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/Shared/interfaces/usuario.interface';
import { AuthService } from 'src/app/Shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    var userId = 
    this.usuario = this.authService.getUsuarioById(localStorage.getItem('userId'));
  }

  abrirModal(content: any){
    this.modalService.open(content).result.then((result) => {
      console.log('Modal Closed');
    }, (reason) => {
      console.log('Modal dismissed');
    });
  }

}

