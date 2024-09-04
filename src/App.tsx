import './App.css';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="w-screen h-screen bg-black">
        <div className="flex items-center justify-center h-full text-gray-600">
          <div className="max-w-full max-h-[calc(100vh-30px)] overflow-hidden p-8 bg-white rounded-lg shadow-lg w-[500px]">
            <h1 className="text-center font-semibold my-3 text-3xl">Todo List</h1>
            <AddTodo />
            <FilterTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
