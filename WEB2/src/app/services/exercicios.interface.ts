export interface IAnswers {
  text: string;
}

export interface IExercicios {
  title: string;
  question: string;
  answers: IAnswers[]
}