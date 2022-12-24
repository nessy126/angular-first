import { Component, Input } from '@angular/core';
import { IWords } from 'src/app/models/words';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class VocabularyComponent {
  @Input()  words: IWords[] = [];
  @Input()  isEdit: boolean
  @Input('fooBar') foo = 'foo'

  constructor(private wordsService: WordsService) {}

  onEdit(isEdit: boolean):void {
    console.log("isEdit in vocabulary", isEdit);
    this.isEdit = isEdit
    console.log("this.isEdit in vocabulary", this.isEdit);
  }
}
