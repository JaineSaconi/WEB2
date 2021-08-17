import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { RoomsService } from 'src/app/services/rooms.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ISala, ISalaRes, IUser } from './../../../services/exercicios.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-classes-register',
  templateUrl: './classes-register.component.html',
  styleUrls: ['./classes-register.component.css']
})
export class ClassesRegisterComponent implements OnInit {

  form: FormGroup;
  salas: ISala = {} as ISala;
  user: IUser = {} as IUser;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService,
    private authService: AuthenticateService,
    private router: Router,
    public snackBar: MatSnackBar,
) {
  this.form = this.fb.group({
    codigo: [null, [Validators.required]],
    description: [null, [Validators.required]],
  });
}

  ngOnInit(): void {
    this.user = this.authService?.getUser();
  }

  async register() {
    const cod = this.form.controls.codigo.value;
    const description = this.form.controls.description.value;

    this.salas.codigo = cod;
    this.salas.description = description;
    this.salas.idProfessor = this.user._id;
    this.salas.isShow = true;

    const res = await this.roomService.registerRoom(this.salas).pipe(take(1)).toPromise() as ISalaRes;

    if(!res){
      this.snackBar.open('Falha no cadastro','', {duration: 2000});
    }
   else {
    this.snackBar.open('Turma cadastradas com sucesso','', {duration: 2000});
     this.router.navigate(["/classes"]);
   }
  }


}
