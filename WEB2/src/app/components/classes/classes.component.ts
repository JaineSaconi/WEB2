import { Component, OnInit } from '@angular/core';
import { MOCK_LIST } from './list-turmas-teste';

export interface ITurma{
  description: string;
  codigo: string;
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  turmas: ITurma[] = MOCK_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
