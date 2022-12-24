export enum TypeOfWordEnum {
  Nomen = "Nomen",
  Verb = "Verb",
  Adjektive = "Adjektive",
  Phrase = "Phrase"
}

export const TypeOfWord2LabelMapping = {
  [TypeOfWordEnum.Nomen]: "Nomen",
  [TypeOfWordEnum.Verb]: "Verb",
  [TypeOfWordEnum.Adjektive]: "Adjektive",
  [TypeOfWordEnum.Phrase]: "Phrase"
}

// type ID = number | string

export interface IWords {
  readonly _id?: Date,
  deutsch: string,
  english?: string,
  russian?: string,
  typeOfWord: TypeOfWordEnum,
  topic?: string,
  createdAt?: string,
  updatedAt?: string

}
