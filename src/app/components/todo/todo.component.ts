import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { Todo } from '@/models'
import { TodoService } from '@/services'
import { CheckboxComponent, CreateTodoComponent, DividerComponent, TodoFilterComponent, TodoItemComponent } from '@/components'

@Component({
  selector: 'App',
  standalone: true,
  styleUrl: 'todo.component.css',
  templateUrl: './todo.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxComponent,
    CreateTodoComponent,
    DividerComponent,
    TodoFilterComponent,
    TodoItemComponent
  ]
})
export class TodoComponent {
  constructor(public service: TodoService) {}

  public get todoList(): Todo[] {
    return this.service.todoList().filter(todo => {
      if (this.service.filter() === 'active') {
        return !todo.isDone
      }

      if (this.service.filter() === 'done') {
        return todo.isDone
      }

      return true
    })
  }
}
