import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-home',
  templateUrl: './perfil-home.component.html',
  styleUrls: ['./perfil-home.component.css']
})
export class PerfilHomeComponent implements OnInit {
  usuario: any;
  
  userId: any;

  constructor() { }

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

}
