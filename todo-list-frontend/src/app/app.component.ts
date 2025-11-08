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
      
      <app-progress-bar *ngIf="isLoading || isDeleting" [isLoading]="isLoading || isDeleting"></app-progress-bar>
      
      <app-todo-item 
        *ngFor="let todo of todos$ | async" 
        [item]="todo"
        (delete)="onDeleteTodo($event)">
      </app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  todos$!: Observable<Todo[]>;
  isLoading = true;
  isDeleting = false;
  searchTerm = new BehaviorSubject<string>('');//Adding a new BehaviorSubject to store the search term.

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos(): void {
    this.isLoading = true;//show loading bar for initial fetch

    const sourceTodos$ = this.todoService.getAll().pipe(
      finalize(() => this.isLoading = false)
    );

    
    this.todos$ = combineLatest([sourceTodos$, this.searchTerm]).pipe(
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

  
  onDeleteTodo(id: number): void {
    this.isDeleting = true;

    this.todoService.remove(id).subscribe({
      next : () => {
        
        console.log(`Todo item with id ${id} deleted successfully.`);
        this.isDeleting = false;

        //for running the entire observable chain,fetching new list
        this.loadTodos();
      },
      error : (err) => {
        
        console.error('Failed to delete todo item', err);
        this.isDeleting = false;//Hide deletion loading state
      }
    });
  }

}