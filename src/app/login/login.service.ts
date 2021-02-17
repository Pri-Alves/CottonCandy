import { Injectable } from '@angular/core';

import { AuthService } from '../Shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

}
