import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User_MOCK } from '../teste/user-mock-teste';
import { IUser, IUserRes } from './exercicios.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private webRequestService: HttpClientService, public snackBar: MatSnackBar,
    ) {
   }
    createUser(user: IUser):Observable<Object> {
    const stringUser = JSON.stringify(user);
    const teste = JSON.parse(stringUser);

    return this.webRequestService.post('register', teste);
   }

   login(user: IUser):Observable<Object> {
    const stringUser = JSON.stringify(user);
    const teste = JSON.parse(stringUser);

    return this.webRequestService.post('register', teste);
   }

    getTeste() {
     const res=  this.webRequestService.get('user');
     return res;
   }
}
