import { Component } from "@angular/core";
@Component(
  {
    selector: 'todo-input',
    templateUrl: 'todo.input.html',
    styleUrls: ['todo.input.css']
  }
)

export class todoInput
{

  public arr: string[]= [];
  len = 0;
  onclick(xyz)
  {
    this.arr.push(xyz.value);
    xyz.value='';
  }

  random(){
    this.len = this.arr.length;
  }
}
