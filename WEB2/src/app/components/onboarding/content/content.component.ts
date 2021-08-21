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

  showExec: boolean = false;
  markdown: IMarkdown[] = MARKDOWN_CONTENT;
  exercicios: IExercicios[] = EXERC_MOCK;
 // auxList: []
  constructor() { }

  ngOnInit(): void {
    // pegar a lista das questoes
    // logica da ordem que as queões eroa mostradas
    // auxList = quesoptes.nivel =1;
  }

  showExercise(res: boolean) {
   this.showExec = res;
  }

  atualizarLista(){
    // auxList = [];
    // auxilist = questoes.dificuldade = 2/
    // mostrar a ordem - 1, 2, 3 ,4
  }

  responder(){
    // mostra se a pessoa errou ou acertou
    // salvar se qtd ela errou ou acertou - user: qtdQuestoesCertas;
    //  IQuestion []
    // openDialog()
    // atualizarLista()

  }

  openDialog() {

  }
}
