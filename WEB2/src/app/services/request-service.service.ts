import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './exercicios.interface';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private webRequestService: HttpClientService) {
   }

    createUser(user: IUser) {
     return this.webRequestService.post('register', { user });
   }

    getTeste() {
     const res=  this.webRequestService.get('user');
     console.log(res);
     return res;
   }
}
