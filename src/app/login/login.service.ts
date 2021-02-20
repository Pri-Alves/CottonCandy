import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../Shared/services/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlLogin = "http://localhost:64667/api/Login"

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Authorization: '.....Token de Autorização.....'
  //   })
  // }

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }
  
  logar(email: String, password: String): Observable<LoginResponse> {
    console.log(password)
    const resposta = this.http.post<any>(this.urlLogin, {
      "email": email,
      "senha": password,
    })
    .subscribe(
       _response => console.log(_response.accessToken),
      //_response => localStorage.setItem('token', JSON.stringify(_response.accessToken)),
      _error => console.log(_error),
    );

    //"Bearer " +
    return this.http.post<any>(this.urlLogin, {
    "email": email,
    "senha": password,
    });
  }

  postLogin(email: String, password:String){
    //tem que trazer o token da  Api
    return this.http.get("http://localhost:4200/users");
  }

}
  
//   logar(Email: String, password: String) {
//     if (Email === 'true' && password === 'true'){
//     return this.http.post(this.API_URL + '/api/login', this.authService) //this.authService, this.httpOptions )
//         .pipe(tap(LoginResponse => {
//             this.authService.setUsuario(LoginResponse.usuario);
//             this.authService.setToken(LoginResponse.token)
//           })
//         );
//     }

//     return timer(3000).pipe(
//       mergeMap(() => throwError('Usuário ou senha incorretos'))
//     );
//   }
// }
