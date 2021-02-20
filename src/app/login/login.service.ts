import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../Shared/services/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {


 

  urlLogin = "http://localhost:5000/api/Login"
  // usuario = {
  //   String email =  "",
  //   String password: ""
  // }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
   
    
  ) { }


 

  logar(email: String, password: String): Observable<LoginResponse> {
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
        console.log(_response.accessToken );
        
        localStorage.setItem('token', "Bearer " +_response.accessToken)

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

  postLogin(email: String, password:String){
    //tem que trazer o token da  Api
    return this.http.get("http://localhost:3000/users");
  }

}
