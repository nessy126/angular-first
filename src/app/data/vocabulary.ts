import { IWords, TypeOfWordEnum } from "../models/words";

export const words: IWords[] = [
  {
    _id: new Date(),
    deutsch: "Wort",
    english: "Word",
    russian: "Слово",
    typeOfWord: TypeOfWordEnum.Nomen
  }

]
