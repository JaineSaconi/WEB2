import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sala-dialog',
  templateUrl: './sala-dialog.component.html',
  styleUrls: ['./sala-dialog.component.css']
})
export class SalaDialogComponent {
  static defaultConfig: Partial<MatDialogConfig> = {
    panelClass: 'bottom-dialog',
    maxWidth: '100vw',
    maxHeight: '100vw'
  };

  form: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { sala: string; },
    public snackBar: MatSnackBar,

    ) {
      this.form = this.fb.group({
        class: [null, [Validators.required]],
    });
  }

  saveAndClose() {

    if(!this.form.controls.class.value){
      this.snackBar.open('Digite o código da sala','', {duration: 4000});
      return;
    } else {
      this.data.sala = this.form.controls.class.value;
    }
  }

}
