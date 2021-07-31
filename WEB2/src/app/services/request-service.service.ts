import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User_MOCK } from '../teste/user-mock-teste';
import { IUser } from './exercicios.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private webRequestService: HttpClientService) {
   }
    createUser(user: IUser) {
    const stringUser = JSON.stringify(user);

    const teste = JSON.parse(stringUser);
     return this.webRequestService.post('register', teste);
   }

    getTeste() {
     const res=  this.webRequestService.get('user');
     console.log(res);
     return res;
   }
}
