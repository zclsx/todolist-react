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
  function updateTaskDone(id, newDone) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: newDone };
        }
        return task;
      });
    });
  }
  function deleteTaskDone(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

  function reNameTask(id, newName) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName };
        }
        return task;
      });
    });
  }

  const numberComplete = tasks.filter((task) => task.done).length;
  const numberTotal = tasks.length;

  function showMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) return "Try do your first list 🙏🏻";
    if (percentage === 100) return "Nice job bro! 😄";
    return "keep it going 💪🏻";
  }
  return (
    <div className="flex text-center  justify-center h-screen">
      <div className="w-2/5 mt-10">
        <h1 className="font-medium text-4xl">
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2 className="font-medium text-xl mt-2">{showMessage()}</h2>
        <TodoList onAddTask={addTask}></TodoList>
        <div className="border-solid border-2 border-black-200 rounded-md m-2">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onToggle={(done) => {
                updateTaskDone(task.id, done);
              }}
              onTrash={() => {
                deleteTaskDone(task.id);
              }}
              onSave={(newName) => {
                reNameTask(task.id, newName);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
