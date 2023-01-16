import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ITodo } from '../models/todo';
// @ts-ignore
// const BACKEND_BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public entities$: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([]);
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private todoList: ITodo[] = [];

  subject = new ReplaySubject<number>();

  constructor(private httpClient: HttpClient) {
  }

  // Server running pn the local machine, port 3000.
  // 1/ At first need to execute XAMPP
  // 2/ Start there server and database
  // 3/ then npm start in "nest-todo-api"
  // 4/ swagger on the http://localhost:3000/swagger/#/todo/TodoController_updateOneBase

  // public onUsingSubject() {
  //   console.log('before null sub');
  //   this.subject.subscribe(val => {
  //     console.log('null', val)
  //   })
  //   console.log('after null sub');
  //
  //    this.subject.next(1)
  //    this.subject.next(2)
  //
  //
  //   console.log('before 1 sub');
  //    this.subject.subscribe(val => {
  //      console.log('first', val)
  //    })
  //   console.log('after 1 sub');
  //
  //    this.subject.next(3)
  //
  //    this.subject.subscribe(val => {
  //      console.log('second', val)
  //    })
  //    this.subject.next(4)
  //
  //   this.subject.subscribe(val => {
  //     console.log('third', val)
  //   })
  //  }

  public getAll() {
    this.loading$.next(true);
    this.httpClient
      .get<ITodo[]>(environment.BACKEND_BASE_URL + 'rest/todo')
      .subscribe(todos => {
        this.todoList = todos;
        this.entities$.next(this.todoList);
        this.loading$.next(false);
      });

  }

  public addTodo(title: string) {
    this.loading$.next(true);
    this.httpClient.post<ITodo>(environment.BACKEND_BASE_URL + 'rest/todo', {
      title, isCompleted: false,
    }).subscribe(todo => {
        this.todoList.push(todo);
        this.entities$.next(this.todoList);
        this.loading$.next(false);
      },
    );
  }

  public updateTodo(todo: ITodo) {
    this.loading$.next(true);
    this.httpClient.patch<ITodo>(`${environment.BACKEND_BASE_URL}rest/todo/${todo.id}`,
      { isCompleted: !todo.isCompleted })
      .subscribe(todoUpdated => {
          this.todoList = this.todoList.map(el => {
            if (el.id === todoUpdated.id) {
              return todoUpdated;
            } else {
              return el;
            }
          });
          this.entities$.next(this.todoList);
          this.loading$.next(false);
        },
      );
  }

  public removeTodo(todoId: number) {
    this.loading$.next(true);
    this.httpClient.delete<ITodo>(`${environment.BACKEND_BASE_URL}rest/todo/${todoId}`)
      .subscribe((todoDeleted) => {
          this.todoList = this.todoList.filter(todo => todoId !== todo.id);
          this.entities$.next(this.todoList);
          this.loading$.next(false);
        },
      );
  }
}




