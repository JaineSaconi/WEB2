export interface IAnswers {
  text: string;
}

export interface IExercicios {
  title: string;
  question: string;
  answers: IAnswers[]
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
}
