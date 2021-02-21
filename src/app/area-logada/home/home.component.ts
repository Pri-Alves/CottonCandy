import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/Shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  usuario: any;
  userId: any;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log("ngOnInit da home")
    this.userId = localStorage.getItem('userId');
    var resposta = localStorage.getItem('usuario')
    if(resposta !== null){
      
      this.usuario = JSON.parse(resposta)
      
    }
    else{
      console.log(" erro no ng Init da home")
    }
    // if ( this.userId === null ){
    //   console.log("nao foi setado")
    // }
    // else{
    //   console.log("setando")
    //   this.usuario = this.authService.getUsuarioById(this.userId);
    //   console.log(this.usuario)
    //   console.log("setou?")
    // }
    
  }

  abrirModal(content: any){
    this.modalService.open(content).result.then((result) => {
      console.log('Modal Closed');
    }, (reason) => {
      console.log('Modal dismissed');
    });
  }

}

