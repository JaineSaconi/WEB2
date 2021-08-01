import { IUser } from './exercicios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  readonly ROOT_URL;

  constructor( private http: HttpClient, public snackBar: MatSnackBar) {
    this.ROOT_URL = "http://localhost:3000/auth";
  }

   get(url: string){
   return  this.http.get(`${this.ROOT_URL}/${url}}`);
  }

  post(url: string, payload: JSON){
   const res = this.http.post(`${this.ROOT_URL}/${url}`, payload);
    this.snackBar.open('email ja cadastrado','', {duration: 4000});
    return res;
  }

  patch(url: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  }

  delete(url: string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
