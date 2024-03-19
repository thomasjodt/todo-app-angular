import { Component, Input } from '@angular/core'

import { FilterType } from '@/models'
import { TodoService } from '@/services'

@Component({
  selector: 'TodoFilter',
  standalone: true,
  imports: [],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {
  @Input() label: string = ''
  @Input() value!: FilterType

  constructor(public service: TodoService) {}

  public changeFilter(value: FilterType): void {
    this.service.filter.set(value)
  }
}
