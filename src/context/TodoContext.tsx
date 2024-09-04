import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Filters, Todo } from '../types/todo';



interface TodoContextType {
  todos: Todo[];
  filteredTodos: Todo[];
  filter: Filters
  addTodo: (text: string) => void;
  updateTodo: (data: Partial<Todo>) => void;
  removeTodo: (id: string) => void;
  setFilter: (filter: Filters) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);


export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>('all');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, isComplete: false }]);
  };

  const updateTodo = (payloadUpdateData: Partial<Todo>) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === payloadUpdateData.id) {
        return {
          ...todo,
          text: payloadUpdateData.text !== undefined ? payloadUpdateData.text : todo.text,
          isComplete: payloadUpdateData.isComplete !== undefined ? payloadUpdateData.isComplete : todo.isComplete,
        };
      }
      return todo;
    })

    if (!updateTodo) throw new Error('Has not to do update')
    setTodos(updateTodos);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    const result = todos.filter((todo) => {
      if (filter === 'all') return true;
      if (filter === 'todo') return !todo.isComplete;
      if (filter === 'done') return todo.isComplete;
      return false;
    });

    setFilteredTodos(result);

  }, [todos, filter])

  return (
    <TodoContext.Provider value={{ todos, filteredTodos, filter, addTodo, updateTodo, removeTodo, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};


export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
