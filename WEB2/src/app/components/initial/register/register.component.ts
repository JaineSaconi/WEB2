import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChildActivationStart, Router } from '@angular/router';
import { RequestServiceService } from 'src/app/services/request-service.service';
import { SalaDialogComponent } from '../../dialogs/sala-dialog/sala-dialog.component';
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
    public dialog: MatDialog,
    ) {
      this.form = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        name: [null, [Validators.required]],
        password: [null, [Validators.required]],
        type: [null, [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  teste1() {
    console.log();

  }

  async save() {
    const valid = this.form.controls.email.status;
    const email = this.form.controls.email.value;

      if(!valid || !email){
        this.snackBar.open('email inválido','', {duration: 4000});
      return;
      }

    if(this.form.controls.name.value === "" || !this.form.controls.name.value ){
      this.snackBar.open('nome inválido','', {duration: 4000});
      return;
    }

    const senha: string = this.form.controls.password.value;

    if(this.form.controls.password.value === "" || !this.form.controls.password.value ){
      this.snackBar.open('senha inválida','', {duration: 4000});
      return;
    } else if(senha.length < 8) {
      this.snackBar.open('senha requer no mínimo 8 caracteres','', {duration: 4000});
      return;
    }

    if(!this.form.controls.type.value) {
      this.snackBar.open('É necessário selecionar se é aluno ou professor','', {duration: 4000});
      return
    }

    if(this.form.controls.type.value == 1){
     const codSala = await this.openDialog();

      if(!codSala) {
        this.snackBar.open('É necessário informar o código da sala','', {duration: 4000});
        return
      }
      else {
        this.user.codSala = codSala;
      }
    }

    this.user.email = this.form.controls.email.value;
    this.user.name = this.form.controls.name.value;
    this.user.password = this.form.controls.password.value;
    this.user.type =  this.form.controls.type.value;

   this.requestService.createUser(this.user).subscribe(res =>{
      if(res) {
        this.router.navigateByUrl('');
        this.snackBar.open('Usuário cadastrado com sucesso','', {duration: 4000});
       } else {
        this.snackBar.open('erro ao cadastrar','', {duration: 4000});

       }
   });
  }

  async openDialog() {
    const dialogRef = this.dialog.open(SalaDialogComponent, {
      data: {},
      ...SalaDialogComponent.defaultConfig
    });
    const res = await dialogRef.afterClosed().toPromise();
    if(res) {
      return res.sala;
    }
  }
}
