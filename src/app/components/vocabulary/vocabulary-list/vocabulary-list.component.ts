import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { IWords } from '../../../models/words';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
})

export class VocabularyListComponent {

  @Input() word: IWords
  @Output() edit = new EventEmitter<boolean>()

  isEdit = false
  editWord: object

  checking() {
    console.log(this.word);
  }


  onEdit(word: object) {
    this.edit.emit(this.isEdit)
    console.log("onEdit in vocabulary-list", word);
    this.editWord = word
    this.isEdit = true
  }
}
