//Component for rendering individual todo items
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  template: ` 
  <div class = "task-indicator" (click)="onDeleteClick()">
    {{ item.task }}
    </div>
    <div class="priority-indicator" [style.background-color]="color">
      {{ item.priority }}
    </div>
  `,
  styleUrls: ['todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() item!: Todo;

  @Output() delete = new EventEmitter<number>();

  get color() {
    switch (this.item.priority) {
      case 1:
        return 'green';
      case 2:
        return 'yellow';
      case 3:
        return 'red';
    }
  }

  onDeleteClick() {
    this.delete.emit(this.item.id);//it will emit the id of the item to the parent component
    //Assumes that the ToDo object has an id property
  }
}
