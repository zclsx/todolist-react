import TodoList from "./TodoList";
import Task from "./Task";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { id: uuidv4(), name: name, done: false }];
    });
  }
  return (
    <div className="flex  justify-center h-screen">
      <div className="w-2/5 mt-10">
        <TodoList onAddTask={addTask}></TodoList>
        <div className="border-solid border-2 border-black-200 rounded-md m-2">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
