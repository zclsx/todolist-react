import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid'

export const useTasks = () => {
  const [tasks, setTasks] = useImmer([])

  useEffect(() => {
    let parsedTasks = []
    try {
      parsedTasks = JSON.parse(localStorage.getItem('tasks')) ?? []
    } catch {
      parsedTasks = []
    }
    if (parsedTasks.length > 0) {
      setTasks(parsedTasks)
    }
  }, [])

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.clear('tasks')
      return
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (name) =>
    setTasks((draft) => {
      draft.push({ id: uuidv4(), name, done: false })
    })

  const updateTask = (id, updateValue) => {
    setTasks((items) =>
      items.map((task) => {
        if (task.id === id) {
          return { ...task, ...updateValue }
        }
        return { ...task }
      })
    )
  }

  const deleteTaskDone = (id) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))

  const numberComplete = useMemo(() => tasks.filter((task) => task.done).length, [tasks])
  const numberTotal = useMemo(() => tasks.length, [tasks])

  function showMessage() {
    const percentage = (numberComplete / numberTotal) * 100
    if (percentage === 0) return 'Try do your first list 🙏🏻'
    if (percentage === 100) return 'Nice job bro! 😄'
    return 'keep it going 💪🏻'
  }

  return {
    tasks,
    setTasks,
    addTask,
    updateTask,
    deleteTaskDone,
    showMessage
  }
}
