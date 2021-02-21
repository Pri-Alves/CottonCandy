import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-home',
  templateUrl: './perfil-home.component.html',
  styleUrls: ['./perfil-home.component.css']
})
export class PerfilHomeComponent implements OnInit {
  usuario: any;
  
  userId: any;

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    console.log("ngOnInit da perfil")
    this.userId = localStorage.getItem('userId');
    var resposta = localStorage.getItem('usuario')
    if(resposta !== null){
      
      this.usuario = JSON.parse(resposta)
      
    }
    else{
      
      console.log(" erro no ng Init do perfil ")
      //this.router.navigate(['login']);
    }
  }

}
