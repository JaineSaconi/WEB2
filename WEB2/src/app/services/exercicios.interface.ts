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
  type?: number;
  __v?: number;
  createdAt?: string;
  //1 - aluno, 2 = professor.
}

export interface IUserRes {
 token: string;
 user: IUser;
}
