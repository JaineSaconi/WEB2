import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class HttpRoomService {

  readonly ROOT_URL;

  constructor( private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000/room";
  }

  post(url: string, payload: JSON){
    const res = this.http.post(`${this.ROOT_URL}/${url}`, payload);

     return res;
   }
}
