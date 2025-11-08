//Root component with search and todo list

import {Component} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable,BehaviorSubject,combineLatest} from "rxjs";
import { finalize,map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text" (input)="onSearchChange($event)">
      <app-progress-bar *ngIf = "isLoading" [isLoading]="isLoading"></app-progress-bar>
      <app-todo-item *ngFor="let todo of todos$ | async" [item]="todo"></app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly todos$: Observable<Todo[]>;
  isLoading = true;
  searchTerm = new BehaviorSubject<string>('');//Adding a new BehaviorSubject to store the search term.

  constructor(todoService: TodoService) {
    this.todos$ = todoService.getAll().pipe(
      finalize(() => this.isLoading = false)
    );
    this.todos$ = combineLatest([this.todos$, this.searchTerm]).pipe(//filtering logic
      map(([todos, searchTerm]) => {
        if(!searchTerm.trim()) {
          return todos;
        }
        return todos.filter(todo => 
          todo.task.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }
  onSearchChange(event : Event ): void {//method to handle input search change
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.next(value);
  }
}
