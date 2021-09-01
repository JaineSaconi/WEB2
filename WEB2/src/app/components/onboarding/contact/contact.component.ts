import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { IContact } from './../../../services/exercicios.interface';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  contact: IContact = {} as IContact;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService,
    private authService: AuthenticateService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      nomeContact: [null, [Validators.required]],
      emailContact: [null, [Validators.required]],
      subjectContact: [null, [Validators.required]],
      messageContact: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  async register() {
    this.contact.nomeContact = this.form.controls.nomeContact.value;
    this.contact.emailContact = this.form.controls.emailContact.value;
    this.contact.subjectContact = this.form.controls.subjectContact.value;
    this.contact.messageContact = this.form.controls.messageContact.value;

    const res = await this.roomService.registerContact(this.contact).pipe(take(1)).toPromise() as IContact;
    if (!res) {
      this.snackBar.open('Falha no envio do contato', '', { duration: 2000 });
    } else {
      this.snackBar.open('Sucesso ao enviar os dados do formulário', undefined, { duration: 2000 });
    }
  }
}
