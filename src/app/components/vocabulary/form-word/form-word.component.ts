import { Component, Input, OnInit } from '@angular/core';
import { IWords, TypeOfWord2LabelMapping, TypeOfWordEnum } from 'src/app/models/words';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-form-word',
  templateUrl: './form-word.component.html',
  styleUrls: ['./form-word.component.css']
})
export class FormWordComponent {
  @Input() isEdit: boolean;
  // @Output() isEdit = new EventEmitter()

  constructor(private wordsService: WordsService) {}

  public TypeOfWord2LabelMapping = TypeOfWord2LabelMapping;
  public types = Object.values(TypeOfWordEnum);

  public type = TypeOfWordEnum.Nomen;
  public deutsch: string = '';
  public english: string = '';
  public russian: string = '';
  public addedWord: object = {};

  public addWord(): void {
    const newWord: IWords = {
      deutsch: this.deutsch,
      english: this.english,
      russian: this.russian,
      typeOfWord: this.type,
    };

    this.addedWord = this.wordsService.addNewWord(newWord);
    console.log("this.addedWord", this.addedWord);
    console.log("newWord: ", newWord);
  }

  changeWord(): void {
    // this.isEdit = false;
    // console.log("this.isEdit",this.isEdit);
  }
}

