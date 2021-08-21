import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ISala } from './exercicios.interface';
import { HttpRoomService } from './http-room.service';

export interface IPutSala{
  isShow: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  att: IPutSala = {} as IPutSala;
  constructor(private http: HttpRoomService) {
  }

   registerRoom( room: ISala): Observable<Object> {
    const stringify = JSON.stringify(room);
    const roomJson = JSON.parse(stringify);

     return  this.http.post(`register`, roomJson);
   }

   getSalasByProfessorId(id: string) {

    return this.http.get(`salas/${id}`);
   }

   getSalaByCodigo(codSala: string){
    return this.http.get(`sala/${codSala}`);
   }

   updateSala(isShow: boolean, id: string) {
     this.att.isShow = isShow;
    const stringify = JSON.stringify(this.att);
    const isShowJson = JSON.parse(stringify);

    console.log(stringify);

    return this.http.patch('update', isShowJson, id);
   }
}
