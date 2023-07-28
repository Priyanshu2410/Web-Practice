import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[] = [];

  constructor() {
    this.localItem = localStorage.getItem("todos") ?? ""; // Provide default value of empty string
    if (this.localItem === "") {
      this.todos = [];
    } else {
      try {
        this.todos = JSON.parse(this.localItem);
      } catch (error) {
        console.error('Error parsing todos from localStorage:', error);
        this.todos = [];
      }
    }
  }

  ngOnInit(): void {
    // Your initialization logic here (if needed)
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodoItem(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodoItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
