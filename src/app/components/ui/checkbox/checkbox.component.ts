import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '@/models'

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() todo!: Todo
  @Output() onTodoChange = new EventEmitter()

  public handleChange() {
    this.onTodoChange.emit()
  }
}
