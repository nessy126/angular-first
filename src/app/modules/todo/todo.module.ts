import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoWigetComponent } from './widgets/todo-wiget/todo-wiget.component';



@NgModule({
  declarations: [
    TodoWigetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TodoWigetComponent
  ]
})
export class TodoModule { }
