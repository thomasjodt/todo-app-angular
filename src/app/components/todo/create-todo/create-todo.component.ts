import { Component, Input, WritableSignal } from '@angular/core'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { Todo } from '@/models'

@Component({
  selector: 'CreateTodo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
  @Input() todoList!: WritableSignal<Todo[]>;

  public newTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)]
  })

  public addTodo(e: SubmitEvent): void {
    e.preventDefault()

    const newTodoDescription = this.newTodo.value.trim()

    if (newTodoDescription !== '' && this.newTodo.valid) {
      this.todoList.update((t) => ([
        ...t,
        new Todo(newTodoDescription)
      ]))
    }

    this.newTodo.reset()
  }

}
