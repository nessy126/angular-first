import { Component, Input, OnInit } from '@angular/core';
import { IWords } from '../../../models/words';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})

export class VocabularyListComponent implements OnInit {
  @Input() word: IWords

  checking() {
    console.log(this.word);
  }

  ngOnInit(): void {

  }
}
