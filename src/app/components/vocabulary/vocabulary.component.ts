import { Component } from '@angular/core';
import { IWords } from '../../models/words';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent {
public deutsch: string = ''
public english: string = ''
public russian: string = ''

public addWord(): void {
  console.log(this.deutsch);
}

}
