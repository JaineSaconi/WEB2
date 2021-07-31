import { IUser } from './../../services/exercicios.interface';
import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { User_MOCK } from 'src/app/teste/user-mock-teste';
import { MARKDOWN_HOME } from './teste';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  markdown = MARKDOWN_HOME;
  user: IUser = User_MOCK;

  constructor(private requestService: RequestServiceService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    const res = this.requestService.createUser(this.user).subscribe((response: any) => {
      console.log(response);
    });

    // console.log(res);

    // this.requestService.getTeste().subscribe(res => {
    //   debugger
    //   console.log(res);
    // })

  }

}
