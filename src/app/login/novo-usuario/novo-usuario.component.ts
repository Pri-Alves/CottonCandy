import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  //UrlUsuario = "http://localhost:64667/api/Usuario"
  UrlUsuario = "http://localhost:5000/api/Usuario"
  usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fotoPerfil: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      fotoCapa: ['', [Validators.required]],
    })
  }

  exibeErro(nomeControle: string){
    if (this.usuarioForm.controls[nomeControle]) {
      return false;
    }
    return this.usuarioForm.controls[nomeControle].invalid && this.usuarioForm.controls[nomeControle].touched
  }

  validadeAllFormFields(){
    Object.keys(this.usuarioForm.controls).forEach(field => {
      const control = this.usuarioForm.get(field);
      control?.markAsTouched();
    });
  }

   salvarUsuario(){
  //   if (this.usuarioForm) {
  //     this.http.post(this.UrlUsuario, {
  //       "nome": nome,
  //       "email":email,
  //       "dataNascimento":dataNascimento,
  //       "genero": genero, 
  //       "fotoPerfil":fotoPerfil,
  //       "cargo":cargo,
  //       "cidade":cidade,
  //       "fotoCapa":fotoCapa,
  //   }),
  //   this.validadeAllFormFields();
  //   return;
  //   }
   }

}
