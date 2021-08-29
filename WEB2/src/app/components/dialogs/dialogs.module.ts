import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaDialogComponent } from './sala-dialog/sala-dialog.component';
import { AnswerDialogComponent } from './answer-dialog/answer-dialog.component';



@NgModule({
  declarations: [
    SalaDialogComponent,
    AnswerDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DialogsModule { }
