import { FilterType, Todo } from '@/models/todo'
import { Injectable, effect, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public filter = signal<FilterType>('active')
  public todoList = signal<Todo[]>([])

  constructor() {
    const todosOpt = window.localStorage.getItem('todos')
    const todos: Todo[] = (todosOpt !== null) ? JSON.parse(todosOpt) : []
    
    for (const todo of todos) {
      this.todoList.update(t => ([
        ...t,
        new Todo(todo.description, todo.isDone, todo.id, todo.editing)
      ]))
    }

    // this.todoList.set(todos)
    this.filter.set('all')

    effect(() => {
      window.localStorage.setItem('todos', JSON.stringify(this.todoList()))
    })
  }
}
