import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(); 
  @Input() i: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // You can perform any initialization related to the todo item here if needed
  }
  onclick(todo: Todo) {
    
    this.todoDelete.emit(todo);
  }
  oncheackboxclick(todo: Todo)
  {
    this.todoCheckbox.emit(todo);
  }
}
