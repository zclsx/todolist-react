import { Task } from './components'
import { useTasks } from './hooks'
import TodoList from './TodoList.tsx'

function App() {
  const { tasks, numberComplete, numberTotal, addTask, showMessage, updateTask, deleteTaskDone } =
    useTasks()

  return (
    <div className="flex h-screen justify-center text-center">
      <div className="mt-10 w-2/5">
        <h1 className="text-4xl font-medium">
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2 className="mt-2 text-xl font-medium">{showMessage()}</h2>
        <TodoList onAddTask={addTask} />
        <div className="border-black-200 m-2 rounded-md border-2 border-solid">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onToggle={(done) => updateTask(task.id, { done })}
              onTrash={() => deleteTaskDone(task.id)}
              onSave={(name) => updateTask(task.id, { name })}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
