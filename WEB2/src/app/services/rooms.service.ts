import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISala } from './interfaces/sala.interface';
import { HttpRoomService } from './http-room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpRoomService) {
  }

  async registerRoom( room: ISala): Promise<Object> {
    const stringify = JSON.stringify(room);
    const roomJson = JSON.parse(stringify);

     return await this.http.post(`register`, roomJson);
   }
}
