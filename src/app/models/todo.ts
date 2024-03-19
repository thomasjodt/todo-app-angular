export class Todo {
  id: number
  isDone: boolean
  description: string
  editing?: boolean

  constructor(description: string, isDone?: boolean, id?: number, editing?: boolean) {
    this.description = description
    this.isDone = isDone ?? false
    this.id = id ?? Date.now()
    this.editing = editing
  }
}

export type FilterType = 'all' | 'done' | 'active'