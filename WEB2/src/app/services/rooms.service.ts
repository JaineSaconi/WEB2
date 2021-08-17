import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ISala } from './exercicios.interface';
import { HttpRoomService } from './http-room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

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
    const stringify = JSON.stringify(isShow);
    const isShowJson = JSON.parse(stringify);

    return this.http.patch('update', isShowJson, id);
   }
}
