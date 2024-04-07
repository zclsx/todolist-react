import TodoList from "./TodoList";
import Task from "./Task";
function App() {
  return (
    <div className="flex  justify-center h-screen">
      <div className="w-2/5 mt-10">
        <TodoList></TodoList>
        <div className="border-solid border-2 border-black-200 rounded-md m-2">
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </div>
      </div>
    </div>
  );
}

export default App;
