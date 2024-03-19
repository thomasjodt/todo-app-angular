import { TodoService } from '@/services/todo.service'
import { Component, Input } from '@angular/core'

import { Todo } from '@/models'
import { CheckboxComponent } from '@/components'

@Component({
  selector: 'TodoItem',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo

  constructor(private service: TodoService) {}

  public toggleTodo(id: number): void {
    this.service.todoList.update(t => t.map(todo => {
      return (todo.id === id)
        ? new Todo(todo.description, !todo.isDone, todo.id, todo.editing)
        :todo
    }))
  }

  public saveDescription(e: SubmitEvent, id: number): void {
    e.preventDefault()

    const input = (e.target as HTMLFormElement).childNodes[0] as HTMLInputElement

    this.service.todoList.update(t => t.map(todo => {
      return (todo.id === id)
        ? new Todo(input.value, todo.isDone, todo.id, false)
        : todo
    }))
  }

  public toggleEditable(id: number, input: HTMLInputElement): void {
    this.service.todoList.update(t => t.map(todo => {
      return (todo.id === id)
        ? new Todo(todo.description, todo.isDone, todo.id, true)
        : todo
    }))

    input.select()
  }

  public removeTodo(id: number): void {
    this.service.todoList.update((t) => t.filter(
      todo => todo.id !== id
    ))
  }
}
