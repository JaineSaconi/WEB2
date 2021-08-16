import { IUser } from './../../../services/exercicios.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RoomsService } from 'src/app/services/rooms.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ISala } from './../../../services/interfaces/sala.interface';

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
) {
  this.form = this.fb.group({
    codigo: [null, [Validators.required]],
    description: [null, [Validators.required]],
  });
}

  ngOnInit(): void {
  }

  async register() {
    const cod = this.form.controls.codigo.value;
    const description = this.form.controls.description.value;

    this.user = this.authService?.getUser();

    this.salas.codigo = cod;
    this.salas.description = description;
    this.salas.idProfessor = this.user._id;

    const res = await this.roomService.registerRoom(this.salas);
    console.log(res);
  }

}
