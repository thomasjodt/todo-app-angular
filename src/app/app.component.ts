import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { TodoComponent } from './components'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'todo-app'
}
