export enum TypeOfWordEnum {
  Nomen = "Nomen",
  Verb = "Verb",
  Adjektive = "Adjektive"
}

export const TypeOfWord2LabelMapping = {
  [TypeOfWordEnum.Nomen]: "Nomen",
  [TypeOfWordEnum.Verb]: "Verb",
  [TypeOfWordEnum.Adjektive]: "Adjektive"
}

// type ID = number | string

export interface IWords {
  _id: Date,
  deutsch: string,
  english?: string,
  russian?: string,
  typeOfWord: TypeOfWordEnum,
  topic?: string

}
