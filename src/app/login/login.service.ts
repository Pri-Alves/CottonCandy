import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../Shared/services/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService  {



 // urlLogin = "http://localhost:64667/api/Login" //no computador da Priscilla
  urlLogin = "http://localhost:5000/api/Login" //no computador da Amanda

  urlUsuario = "http://localhost:5000/api/Usuario/";


  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,

  ) { }

  logar(email: String, password: String): Observable<LoginResponse> {
    console.log("entrou em logar")
    // if (email === 'vitorfgsantos@outlook.com' && password ==='123') {
    //   return of({
    //     usuario: {
    //       nome: 'Vitor',
    //       cargo: 'Farias',
    //       email: 'vitorfgsantos@outlook.com',
    //     },
    //     token: 'aDrahabiAdGugiua16287',
    //   })
    //     .pipe(
    //       delay(2000),
    //       tap(response => {
    //         this.authService.setUsuario(response.usuario);
    //         this.authService.setToken(response.token)
    //       })
    //     );
    // }

    // this.usuario.email = email
    // this.usuario.password = password

   
    //const resposta = this.http.post(this.urlLogin, this.usuario)

    const resposta = this.http.post<any>(this.urlLogin, {
      "email": email,
      "senha": password
    })
    .subscribe(
      _response => {
        //console.log(_response.accessToken );
        // localStorage.setItem('token', "Bearer " +_response.accessToken)
        this.authService.setToken("Bearer " +_response.accessToken),
        //this.authService.setUserId(_response.userId),
        this.authService.setUserId(_response.userId)
        this.authService.getUsuarioById(_response.userId).subscribe(
          _response => {
            
            // console.log(_response)
            localStorage.setItem('usuario', JSON.stringify(_response))

            console.log("tentando pegar perfil da classe login");
            this.http.get<any>(this.urlUsuario + this.authService.getUserId() + '/Perfil')
            .subscribe(
              _response =>{
                console.log(_response)
                localStorage.setItem('perfil', JSON.stringify(_response))
                //this.router.navigate(['home']);
              },
              _error => console.log("não funcionou")
            )

            this.router.navigate(['home']);
            
          }
        )
        if (resposta === null){
          console.log("nao pegou ;_;")
        }
        else{

          console.log(JSON.stringify(resposta))
          localStorage.setItem('usuario', JSON.stringify(resposta))
        }
        
      },
      _error => console.log(_error),
    );

    //return "";
    
   return this.http.post<any>(this.urlLogin, {
    "email": email,
    "senha": password
  });

 
    
    // return timer(3000).pipe(
    //   mergeMap(() => throwError('Usuário ou senha incorretos'))
    // );
  }

  // postLogin(email: String, password:String){
  //   //tem que trazer o token da  Api
  //   return this.http.get("http://localhost:4200/api/Usuario");
  // }

}
