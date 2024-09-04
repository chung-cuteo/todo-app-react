type  Filters = 'all' | 'todo' | 'done'

interface Todo {
  id: string;
  text: string;
  isComplete: boolean;
}


export type { Todo, Filters }