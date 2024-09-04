import { useTodo } from '../context/TodoContext'
import { Todo } from '../types/todo'
import TodoItem from './TodoItem'

function TodoList() {
  const { filteredTodos } = useTodo()

  if (filteredTodos.length === 0) {
    return <p className="text-center text-gray-500">To do list empty</p>
  }

  return (
    <ul className="flex flex-col gap-3 max-h-[calc(100vh-200px)] overflow-y-scroll mt-5">
      {filteredTodos.map(({ id, text, isComplete }: Todo) => (
        <li key={id}>
          <TodoItem id={id} text={text} isComplete={isComplete} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
