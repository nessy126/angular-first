import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IWords } from '../models/words';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<IWords[]> {
    return this.http
      .get<IWords[]>('https://api-vocabulary.onrender.com/api/words')
      //https://vocabulary-de.herokuapp.com/
      .pipe(retry(2), catchError(this.errorHandler.bind(this)));
  }

  addNewWord(newWord: IWords): Observable<IWords> {
    return this.http.post<IWords>(
      'https://api-vocabulary.onrender.com/api/words',
      newWord
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
