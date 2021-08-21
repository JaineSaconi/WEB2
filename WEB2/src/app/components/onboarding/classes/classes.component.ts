import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ISalaRes, IUser } from 'src/app/services/exercicios.interface';
import { IResPut } from 'src/app/services/Interfaces/resPut.interface';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  salas: ISalaRes[] = {} as ISalaRes[];
  user: IUser = {} as IUser;

  constructor(
    private roomService: RoomsService,
    private authService: AuthenticateService,
  ) { }

  async ngOnInit(): Promise<void> {

   this.user = this.authService.getUser();
   if(this.user._id){
     this.salas = await this.roomService.getSalasByProfessorId(this.user?._id).pipe(take(1)).toPromise() as ISalaRes[];
   }
  }

  async atualize(id: string | undefined) {
    if(id){
      const res = await this.roomService.updateSala(false, id).pipe(take(1)).toPromise() as IResPut;
      if(res.n === 1){
        window.location.reload();
      }
    }
  }

}
