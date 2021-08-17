import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class HttpRoomService {

  readonly ROOT_URL;

  constructor( private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000/room";
  }

  get(url: string) {
    return  this.http.get(`${this.ROOT_URL}/${url}`);
  }

  post(url: string, payload: JSON){
    const res = this.http.post(`${this.ROOT_URL}/${url}`, payload);
     return res;
   }

   patch(url: string, payload: JSON, id: string) {

    const config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')

    return this.http.patch(`${this.ROOT_URL}/${url}/${id}`, payload , {headers: config});
   }
}
