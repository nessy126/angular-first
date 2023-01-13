import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../../../models/todo';

@Component({
  selector: 'app-todo-wiget',
  templateUrl: './todo-wiget.component.html',
  styleUrls: ['./todo-wiget.component.css'],
})
export class TodoWigetComponent implements OnInit {
  title: string = '';
  private httpClient: HttpClient;
  public todoList: ITodo[];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    this.httpClient.get<ITodo[]>('http://localhost:3000/rest/todo')
      .subscribe(todoList => {
        this.todoList = todoList;
      });
    console.log(this.todoList)
  }

  onCreate(): void {
    // console.log(this.title)
    if(this.title) {
      this.httpClient.post<ITodo>('http://localhost:3000/rest/todo', {
        title: this.title, isCompleted: false
      }).subscribe( todo => {
        this.todoList.push(todo)
        }
      )
      this.title = ''
    }
  }

  onComplete(todo: ITodo): void {
    this.httpClient.patch<ITodo>(`http://localhost:3000/rest/todo/${todo.id}`,
      { isCompleted: !todo.isCompleted })
      .subscribe( todoUpdated => {
          this.todoList = this.todoList.map(el => {
            if(el.id === todoUpdated.id) {
            return   todoUpdated
            } else {
            return   el
            }
          })
        }
      )
  }

  onRemove(todoId: number): void {
      this.httpClient.delete<void>(`http://localhost:3000/rest/todo/${todoId}`)
        .subscribe( () => {
          this.todoList = this.todoList.filter(todo => todoId !== todo.id )
        }
      )
  }

}
