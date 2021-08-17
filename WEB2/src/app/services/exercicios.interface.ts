export interface IAnswers {
  text: string;
}

export interface IExercicios {
  title: string;
  question: string;
  answers: IAnswers[]
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
