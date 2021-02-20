import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PostagemService } from '../postagem.service';

@Component({
  selector: 'app-nova-postagem',
  templateUrl: './nova-postagem.component.html',
  styleUrls: ['./nova-postagem.component.css']
})
export class NovaPostagemComponent implements OnInit {

  postagemForm: FormGroup;
  formBuilder: FormBuilder;

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    
   }
   ngOnInit() {
    this.inicializarFormulario();

  }


  inicializarFormulario() {
    this.postagemForm = this.formBuilder.group({
      texto: ['', Validators.required],
    });
  }

  validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validarCamposDoFormulario(control);
      }
    });
  }

  onSubmit() {
    if (this.postagemForm.invalid) {
      this.validarCamposDoFormulario(this.postagemForm);
      return;
    }

    //this.criarContato();
  }


  // criarContato() {
  //   this.postagemService.criarPostagem(this.postagemForm.value);
  // }

  exibeErro(nomeControle: string) {
    if (!this.postagemForm.get(nomeControle)) {
      return false;
    }
    return "error";
  }
}
