import { useTodo } from '../context/TodoContext'
import { Todo } from '../types/todo'

function TodoItem({ id, text, isComplete }: Todo) {
  const { updateTodo, removeTodo } = useTodo()

  const handleUpdateProcessTodo = (isChecked: boolean) => {
    if (!id) return
    updateTodo({ id, isComplete: isChecked })
  }

  const handleUpdateTextTodo = () => {
    if (!id) return
    const newText = window.prompt('Enter text to do')
    if (newText) updateTodo({ id, text: newText })
  }

  const handleDelete = () => {
    if (!id) return
    removeTodo(id)
  }

  return (
    <div className={`flex items-center gap-3 p-2 border-b rounded border-gray-300 ${isComplete ? 'bg-gray-200' : ''}`}>
      <input
        className="hidden"
        type="checkbox"
        id={id}
        onChange={(e) => handleUpdateProcessTodo(e.target.checked)}
        checked={isComplete}
      />
      <label
        className="flex items-center h-7 rounded cursor-pointer"
        htmlFor={id}
      >
        <span className={`w-5 h-5 border-2 ${isComplete ? 'bg-purple-700' : 'bg-transparent'} flex items-center justify-center`}>
          {isComplete && (
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </label>
      <span className={`text-sm line-clamp-1 ${isComplete ? 'text-[#9CA3A] line-through' : ''}`}>{text}</span>
      <div className="flex items-center gap-2 ml-auto">
        <button
          type="button"
          className="px-1 py-1 rounded hover:ring-2 hover:ring-violet-700"
          onClick={handleUpdateTextTodo}
          aria-label="Edit todo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#5f6368"
          >
            <path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z" />
          </svg>
        </button>
        <button
          type="button"
          className="px-1 py-1 rounded hover:ring-2 hover:ring-violet-700"
          onClick={handleDelete}
          aria-label="Delete todo"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M18.4555 5.54446L5.54443 18.4555"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.4555 18.4555L5.54443 5.54446"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
