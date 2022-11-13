import { Component, Input } from '@angular/core';
import { words } from '../../../data/vocabulary';
import { IWords } from '../../../models/words';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})

export class VocabularyListComponent {
  @Input() words: IWords[] = []

  checking() {
    console.log(this.words);
  }
}
