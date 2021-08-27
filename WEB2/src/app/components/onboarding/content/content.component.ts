import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

import { UserQuestionService } from 'src/app/services/userQuestion.service';
import { IQuestion, IUser, IUserQuestion, IUserQuestionAnswers } from './../../../services/exercicios.interface';
import { AnswerDialogComponent } from '../../dialogs/answer-dialog/answer-dialog.component';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IResPut } from 'src/app/services/Interfaces/resPut.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  form: FormGroup;

  showExec: boolean = true;
  questions: IQuestion[] = {} as IQuestion[];
  auxQuestion: IQuestion = {} as IQuestion;

  user: IUser = {} as IUser;
  userQuestion = [<IUserQuestion>{}];
  userQuestionAnswer: IUserQuestionAnswers = {} as IUserQuestionAnswers;

  i = 0;

  constructor(
    private userQuestionService: UserQuestionService,
    public dialog: MatDialog,
    private authService: AuthenticateService,
    private fb: FormBuilder,
    ) {
      this.form = this.fb.group({
        opt: [null, [Validators.required]],
        name: [null, [Validators.required]],
      });
     }

  async ngOnInit() {
    this.user;
    this.auxQuestion;
    this.questions = await (await this.userQuestionService.getQuestion()).pipe(take(1)).toPromise() as IQuestion[];
    this.user = this.authService.getUser();
    this.auxQuestion = this.questions[0];
  }

  showExercise(res: boolean) {
   this.showExec = res;
  }

  next() {
    this.i++;
    this.auxQuestion = this.questions[this.i];
  }


  async verifyUserQuestioAlreadyExist(id: string): Promise<IUserQuestion[]> {
    return await (await this.userQuestionService.getUserQuestionByUserId(id)).pipe(take(1)).toPromise() as IUserQuestion[];
  }

  async responder(){
    if(this.user._id)
    this.userQuestion = await this.verifyUserQuestioAlreadyExist(this.user._id);

      if(this.userQuestion.length > 0){
        const question = this.userQuestion.map(f => f.questions.find(q => q.qid == this.auxQuestion._id));
        if(question[0] !== undefined ){
          this.update(question[0]);
        } else {
          question[0] = await this.addQuestion();
          this.userQuestion[0]?.questions?.push(question[0]);
        }

        const res = await (await this.userQuestionService.updateAnswers(this.userQuestion[0], this.userQuestion[0]?._id)).pipe(take(1)).toPromise() as IResPut;
      } else {
        this.userQuestion.push(await this.createUser());
      }

      this.next()
}

async addQuestion(): Promise<IUserQuestionAnswers>{
  if(this.auxQuestion?._id)
  this.userQuestionAnswer.qid = this.auxQuestion?._id;

  this.userQuestionAnswer.answers = [];
  this.userQuestionAnswer.selected = [];

  if(this.auxQuestion.answer === this.form.controls.opt.value){
    this.userQuestionAnswer.answers.push(true);
    this.userQuestionAnswer.selected.push(this.form.controls.opt.value);
  } else {
    this.userQuestionAnswer.answers.push(false);
    this.userQuestionAnswer.selected.push(this.form.controls.opt.value);
  }

  return this.userQuestionAnswer;
}

async update(question: { qid?: string; answers?: boolean[] ; selected?: string[]; }){

  if(this.auxQuestion.answer === this.form.controls.opt.value){
    question.answers?.push(true);
    question.selected?.push(this.form.controls.opt.value);
  } else{
    question.answers?.push(false);
    question.selected?.push(this.form.controls.opt.value);
  }
    const que: IUserQuestionAnswers = question as IUserQuestionAnswers;

    const index = this.userQuestion[0].questions.findIndex(f => f.qid == question.qid);
    this.userQuestion[0].questions[index] = que;

}

async createUser(): Promise<IUserQuestion>{
    this.userQuestion = [];

    const userQ: IUserQuestion = {} as IUserQuestion;
    const res =  await this.addQuestion();
    if(this.user._id)
    userQ.userid = this.user._id;

    userQ.questions = [{
      qid: res.qid,
      answers: res.answers,
      selected: res.selected
    }]


    return await (await this.userQuestionService.createUserQuestion(userQ)).pipe(take(1)).toPromise() as IUserQuestion;
}

  async openDialog() {
    const dialogRef = this.dialog.open(AnswerDialogComponent, {
      data: {},
      ...AnswerDialogComponent.defaultConfig
    });
  }

}
