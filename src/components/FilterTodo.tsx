import Button from './Button'
import { useTodo } from '../context/TodoContext'
import { Filters } from '../types/todo'

function FilterTodo() {
  const { filter, setFilter } = useTodo()

  const isActiveButton = (filterText: Filters) => filter === filterText

  const handleFilter = (filterText: Filters) => setFilter(filterText)

  return (
    <ul className="flex items-center gap-2 my-5">
      <li>
        <Button text="All" active={isActiveButton('all')} onClick={() => handleFilter('all')} />
      </li>
      <li>
        <Button text="ToDo" active={isActiveButton('todo')} onClick={() => handleFilter('todo')} />
      </li>
      <li>
        <Button text="Done" active={isActiveButton('done')} onClick={() => handleFilter('done')} />
      </li>
    </ul>
  )
}

export default FilterTodo
