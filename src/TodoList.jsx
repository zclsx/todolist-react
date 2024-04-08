import { useState } from "react";
function TodoList({ onAddTask }) {
  const [todos, setTodos] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(todos);
    setTodos("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-indigo-400 border-4 p-2 rounded-lg  m-2 flex">
        <button className="bg-indigo-500 border px-2 rounded-lg"> + </button>
        <input
          type="text"
          placeholder="input your Todo ..."
          className="pl-2 w-full ml-2 focus:outline-none"
          onChange={(e) => setTodos(e.target.value)}
          value={todos}
        />
      </div>
    </form>
  );
}

export default TodoList;
