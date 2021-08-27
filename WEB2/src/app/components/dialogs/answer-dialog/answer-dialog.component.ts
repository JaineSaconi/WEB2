import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrls: ['./answer-dialog.component.css']
})
export class AnswerDialogComponent implements OnInit {
  static defaultConfig: Partial<MatDialogConfig> = {
    panelClass: 'bottom-dialog',
    maxWidth: '100vw',
    maxHeight: '100vw'
  };

  text = '';
  constructor( @Inject(MAT_DIALOG_DATA) public data: { answer: string; isRiht: boolean;},) { }

  ngOnInit(): void {

    if(this.data.isRiht){
      this.text = 'Parabéns! Você acertou.';
    } else {
      this.text = 'Que pena, você errou.';
    }
  }

}
