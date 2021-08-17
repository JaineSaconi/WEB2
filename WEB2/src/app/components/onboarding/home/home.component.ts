import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ISala, ISalaRes, IUser } from 'src/app/services/exercicios.interface';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { User_MOCK } from 'src/app/teste/user-mock-teste';
import { MARKDOWN_HOME } from './teste';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  markdown = MARKDOWN_HOME;
  //user: IUser = User_MOCK;
  user: IUser = {} as IUser;
  sala: ISalaRes[] = {} as ISalaRes[];

  constructor(
    private requestService: RequestServiceService,
    private roomService: RoomsService,
    private authService: AuthenticateService
    ) {
   }

  async ngOnInit(): Promise<void> {
    this.user = this.authService.getUser();
    if(this.user.type === 1 && this.user.codSala){
       this.sala = await this.roomService.getSalaByCodigo(this.user.codSala).pipe(take(1)).toPromise() as ISalaRes[]
    }
  }

}
