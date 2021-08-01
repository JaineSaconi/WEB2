import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { IUser, IUserRes } from './../../../services/exercicios.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  user: IUser = {} as IUser;
  teste: IUserRes= {} as IUserRes;
  constructor(
    private requestService: RequestServiceService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router,
    ) {
      this.form = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        name: [null, [Validators.required]],
        password: [null, [Validators.required]],
      });
    }

  ngOnInit(): void {
  }

  save(): void {
    const valid = this.form.controls.email.status;
    const email = this.form.controls.email.value;

    const aluno = email.includes('aluno');
    const professor = email.includes('professor');

    if(this.form.controls.email.value === "" || !this.form.controls.email.value || valid === "INVALID" ){
      this.snackBar.open('email inválido','', {duration: 2000});
      return;
    } else if(!aluno && !professor){
      this.snackBar.open('formato de email invalido. Deve conter "alunos" ou "professor"','', {duration: 4000});
      return;
    }

    if(this.form.controls.name.value === "" || !this.form.controls.name.value ){
      this.snackBar.open('nome inválido','', {duration: 2000});
      return;
    }

    const senha: string = this.form.controls.password.value;

    if(this.form.controls.password.value === "" || !this.form.controls.password.value ){
      this.snackBar.open('senha inválida','', {duration: 2000});
      return;
    } else if(senha.length < 8) {
      this.snackBar.open('senha requer no mínimo 8 caracteres','', {duration: 4000});
      return;
    }

    this.user.email = this.form.controls.email.value;
    this.user.name = this.form.controls.name.value;
    this.user.password = this.form.controls.password.value;
    this.user.type =  aluno ? 1:2;


   this.requestService.createUser(this.user).subscribe(res =>{
      if(res) {
        this.router.navigateByUrl('');
        this.snackBar.open('Usuário cadastrado com sucesso','', {duration: 4000});
       }
   });
  }
}
