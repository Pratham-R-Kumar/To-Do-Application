import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComp } from './app.todo/app.todo';
import { todoHeader } from './app.todo/todo-header/todo.header';
import { todoInput } from './app.todo/todo-input/todo.input';
import { todoList } from './app.todo/todo-list/todo.list';

@NgModule({
  declarations: [
    AppComponent,
    TodoComp,
    todoHeader,
    todoInput,
    todoList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
