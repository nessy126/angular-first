import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ITodo } from '../../models/todo';
import { TodoService } from '../../todo-services/todo.service';

@Component({
  selector: 'app-todo-wiget',
  templateUrl: './todo-wiget.component.html',
  styleUrls: ['./todo-wiget.component.css'],
})
export class TodoWigetComponent implements OnInit {
  title = '';

  public todoList$: Observable<ITodo[]>;
  public loading$: Observable<boolean>
  loading: boolean = false;

  constructor(private todoService: TodoService) {  }

  ngOnInit(): void {
    this.todoList$ = this.todoService.entities$;
    this.loading$ = this.todoService.loading$
    this.todoService.getAll();
  }

  onCreate(): void {
    if (this.title) {
      this.todoService.addTodo(this.title);
      this.title = '';
    }
  }

  onComplete(todo: ITodo): void {
    this.todoService.updateTodo(todo);
  }

  onRemove(todoId: number): void {
    this.todoService.removeTodo(todoId);
  }

}
