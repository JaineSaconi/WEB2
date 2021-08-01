import { Component, OnInit } from '@angular/core';
import { IExercicios } from 'src/app/services/exercicios.interface';
import { IMarkdown } from 'src/app/services/markdown.interface';
import { EXERC_MOCK } from './exercicios';
import { MARKDOWN_CONTENT } from './markdown_content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  markdown: IMarkdown[] = MARKDOWN_CONTENT;
  showExec = false;
  exercicios: IExercicios[] = EXERC_MOCK;
  constructor() { }

  ngOnInit(): void {
  }

  showExercise(res: boolean) {
    this.showExec = res;
  }
}
