import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { RoomsService } from 'src/app/services/rooms.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { IContact} from './../../../services/exercicios.interface';
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
    const name = this.form.controls.name.value;
    const email = this.form.controls.email.value;
    const subject = this.form.controls.subject.value;
    const message = this.form.controls.message.value;

    this.contact.nomeContact = name;
    this.contact.emailContact = email;
    this.contact.subjectContact = subject;
    this.contact.messageContact = message;

    const res = await this.roomService.registerContact(this.contact).pipe(take(1)).toPromise() as IContact;

    if(!res){
      this.snackBar.open('Falha no envio do contato','', {duration: 2000});
    }

  }
}
