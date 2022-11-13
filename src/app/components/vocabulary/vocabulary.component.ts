import { Component } from '@angular/core';
import { words } from 'src/app/data/vocabulary';
import { IWords, TypeOfWord2LabelMapping, TypeOfWordEnum } from '../../models/words';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})


export class VocabularyComponent {
  public TypeOfWord2LabelMapping = TypeOfWord2LabelMapping
  public types = Object.values(TypeOfWordEnum)

  public words = words
  public type = TypeOfWordEnum.Nomen
  public deutsch: string = ''
  public english: string = ''
  public russian: string = ''
  public id: Date = new Date()

  public addWord(): void {
    const newWord: IWords = {
      _id: this.id,
      deutsch: this.deutsch,
      english: this.english,
      russian: this.russian,
      typeOfWord: this.type,
    }
    words.push(newWord)
    console.log(words);
  }

}
