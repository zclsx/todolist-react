import { useState } from 'react'

interface TodoListProps {
  onAddTask: (name: string) => void
}

function TodoList(props: TodoListProps) {
  const { onAddTask } = props

  const [todos, setTodos] = useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onAddTask(todos)
    setTodos('')
  }

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTodos(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-2 flex rounded-lg border-4 border-indigo-400 p-2">
        <button
          type="submit"
          className="rounded-lg border bg-indigo-500 px-2"
        >
          +
        </button>
        <input
          type="text"
          placeholder="input your Todo ..."
          className="ml-2 w-full pl-2 focus:outline-none"
          onChange={handleTextChange}
          value={todos}
        />
      </div>
    </form>
  )
}

export default TodoList
