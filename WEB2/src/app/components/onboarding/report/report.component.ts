import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { RoomsService } from './../../../services/rooms.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { IQuestion, ISalaRes, IUser, IUserQuestion, IUserReport } from 'src/app/services/exercicios.interface';
import { UserQuestionService } from 'src/app/services/userQuestion.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  user: IUser = {} as IUser;
  userQuestion = [<IUserQuestion>{}];
  questions: IQuestion[] = {} as IQuestion[]

  studenReport: IUserReport[] = {} as IUserReport[];
  qtdQuestionsAswered: number = 0;

  salas: ISalaRes[] = {} as ISalaRes[];
  alunosSalas: IUser[] = {} as IUser[];

  constructor(
    private authService: AuthenticateService,
    private userQuestionService: UserQuestionService,
    private roomsService: RoomsService,
    ){}

  async ngOnInit() {
    this.user = this.authService.getUser();
    this.questions = await this.getQuestions();

    if(this.user._id){
      if(this.user.type === 1)
        this.reportForStudent(this.user._id);
      else
        this.reportForProfessor();
    }
  }

  async reportForStudent(id: string) {
      this.userQuestion = await this.getByUserId(id);
      this.studenReport = [];

      this.qtdQuestionsAswered = this.userQuestion[0].questions.length;

      this.userQuestion[0].questions.forEach(f => {
        const desc = this.questions.find(q => q._id === f.qid)?.descriptionQuestion;
        const quest = this.questions.find(q => q._id === f.qid);

        const hit = f.answers.filter(m => m);
        const error = f.answers.filter(m => m === false);
        const question: IUserReport = {} as IUserReport;
        question.errors = error.length;
        question.hits = hit.length;
        question.questionDescription = desc as string;
        question.question = quest as IQuestion;
        question.respostas = f.selected;
        question.media = hit.length /f.answers.length

        this.studenReport.push(question);
      });
  }

  async reportForProfessor(){
    if(this.user._id)
      this.salas = await this.getRoomByIdProfessor(this.user._id);
  }

  async onChangeClassValue(sala: ISalaRes) {
    this.alunosSalas = await (await this.userQuestionService.getAlunosByCodSala(sala.codigo)).pipe(take(1)).toPromise() as IUser[];
  }

  async onChangeAlunoValue(aluno: IUser){
    if(aluno._id)
      this.reportForStudent(aluno._id);
  }

  async getRoomByIdProfessor(id: string): Promise<ISalaRes[]>{
    return await this.roomsService.getSalasByProfessorId(id).pipe(take(1)).toPromise() as ISalaRes[];
  }

  async getByUserId(id: string): Promise<IUserQuestion[]> {
    return await (await this.userQuestionService.getUserQuestionByUserId(id)).pipe(take(1)).toPromise() as IUserQuestion[];
  }

  async getQuestions() {
    return await (await this.userQuestionService.getQuestion()).pipe(take(1)).toPromise() as IQuestion[];
  }


}
