export interface IAnswers {
  text: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  type: number;
  __v?: number;
  createdAt?: string;
  codSala?: string;
  qtdQuestoesCertas?: number;
  hasStarted: boolean;
  //1 - aluno, 2 = professor.
}

export interface IUserRes {
 token: string;
 user: IUser;
}

export interface ISala {
  codigo: string;
  description: string;
  idAluno?: string[];
  idProfessor?: string;
  isShow: boolean;
}

export interface ISalaRes {
  _id?: string;
  codigo: string;
  description: string;
  idAluno?: string[];
  idProfessor?: string;
  createdAt?: string;
  __v: number;
  isShow: boolean;
}

export interface IQuestion {
    _id?: string;
    _idQuestion?: string;
    descriptionQuestion: string;
    opt1: string;
    opt2: string;
    opt3: string;
    opt4: string;
    dificulty: number;
    answer: string;
}

export interface IUserQuestion {
  userid: string;
  questions: [{
    qid: string;
    answers: boolean[];
    selected: string[];
  }];
  _id: string;
}

export interface IUserQuestionAnswers {
  qid: string;
  answers: boolean[];
  selected: string[];
}

export interface IUserReport {
 questionDescription: string;
 errors: number;
 hits: number;
 question: IQuestion;
 respostas: string[];
 media: number;
}
