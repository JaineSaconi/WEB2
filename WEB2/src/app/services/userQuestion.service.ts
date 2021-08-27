import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserQuestion } from './exercicios.interface';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000/userquestion"
   }

  async getQuestion(): Promise<Observable<Object>> {
    const url = 'questions';

     return await this.http.get(`${this.ROOT_URL}/${url}`);
   }

   async createUserQuestion(userQuestion: IUserQuestion) {
     const stringfy = JSON.stringify(userQuestion);
     const resJson = JSON.parse(stringfy);

    return await this.http.post(`${this.ROOT_URL}/register`, resJson);
   }

   async getUserQuestionByUserId(userId: string) {
    return await this.http.get(`${this.ROOT_URL}/${userId}`);
   }

   async updateAnswers(userQuestion: IUserQuestion, id: string) {
    const stringfy = JSON.stringify(userQuestion);
    const resJson = JSON.parse(stringfy);

    return await this.http.patch(`${this.ROOT_URL}/update/${id}`, resJson)
   }
}
