import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./exercicios.interface";
import { HttpClientService } from "./http-client.service";
import { ILogin } from "./interfaces/login.interface";

@Injectable({
    providedIn: 'root'
  })

  export class AuthenticateService{
      user: IUser = {} as IUser;

    constructor (private httpClientService: HttpClientService) {}

    login(login: ILogin): Observable<Object>{
        const stringify = JSON.stringify(login);
        const loginJson = JSON.parse(stringify);

        return this.httpClientService.post('authenticate', loginJson);
    }

    getUser(): IUser {
        const res = localStorage.getItem("user");
        if(res){
            this.user = JSON.parse(res);
        }
        return this.user;
    }

  }
