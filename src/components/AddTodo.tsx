import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function AddTodo() {
  const { addTodo } = useTodo();
  const [textTodo, setTextTodo] = useState<string>('');
  const [error, setError] = useState<string>('');

  const borderErrorClass = error ? "border-b-red-500" : "";
  const handleAddTodo = () => {
    if (!textTodo.trim()) {
      setError('Input cannot be empty');
      return;
    }
    addTodo(textTodo);
    setTextTodo('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleFocus = () => {
    setError('');
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <input
          className={`flex-grow h-8 focus:outline-none border-b-2 ${borderErrorClass} focus:border-b-violet-700`}
          type="text"
          placeholder="Add a new task"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
        <button
          type="button"
          className="rounded px-2 py-2 hover:ring-2 hover:ring-violet-700"
          onClick={handleAddTodo}
        >
          <svg
            className="w-5 h-5 text-gray-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
      {error && (
        <p className="mt-1 text-red-500">{error}</p>
      )}
    </>
  );
}

export default AddTodo;
