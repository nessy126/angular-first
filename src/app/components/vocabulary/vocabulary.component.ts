import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IWords, TypeOfWord2LabelMapping, TypeOfWordEnum } from '../../models/words';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css'],
  // encapsulation: ViewEncapsulation.None
})


export class VocabularyComponent {
  @Input() word: IWords[] = []

  constructor(
    private wordsService: WordsService
  ) {
  }

  public TypeOfWord2LabelMapping = TypeOfWord2LabelMapping
  public types = Object.values(TypeOfWordEnum)

  public type = TypeOfWordEnum.Nomen
  public deutsch: string = ''
  public english: string = ''
  public russian: string = ''
  public id: Date = new Date()
  public addedNewWord: object = {}

  public addWord(): void {
    const newWord: IWords = {
      _id: this.id,
      deutsch: this.deutsch,
      english: this.english,
      russian: this.russian,
      typeOfWord: this.type,
    }

    this.addedNewWord = this.wordsService.addNewWord(newWord)
    // words.push(newWord)
    // console.log(words);
  }

}
