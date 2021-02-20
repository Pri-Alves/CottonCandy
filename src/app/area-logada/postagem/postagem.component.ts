import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Postagem } from './postagem.interfaces';
import { PostagemService } from './postagem.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagens: Postagem[];
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    // private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.carregarPostagens();
  }

  carregarPostagens() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.postagemService. getPostagens()
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      );
  }

  onSuccess(response: Postagem[]) {
    this.postagens = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  novaPostagem() {
    this.router.navigate(['contatos/novo']);
  }

  /* irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`]);
  }

  irParaEditar(idContato: number) {
    this.router.navigate([`contatos/${idContato}/editar`]);
  }

  deletarContato(idContato: number) {
    this.contatosService.deleteContato(idContato.toString())
      .subscribe(
        response => this.onSuccessDeletarContato(idContato),
        error => this.onErrorDeletarContato(),
      );
  }

  onSuccessDeletarContato(idContato) {
    this.toastr.success('Sucesso!', 'Contato deletado com sucesso.');
    this.contatos = this.contatos.filter(contato => contato.id !== idContato);
  }

  onErrorDeletarContato() {
    console.log('erro ao deletar!')
    // faço alguma coisa
  } */



}