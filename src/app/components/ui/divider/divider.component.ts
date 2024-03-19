import { Component, Input } from '@angular/core'

@Component({
  selector: 'Divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html'
})
export class DividerComponent {
  @Input() className: string = ''
}
