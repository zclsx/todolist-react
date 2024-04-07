function TodoList() {
  return (
    <>
      <div className="border-indigo-400 border-4 p-2 rounded-lg  m-2 flex">
        <button className="bg-indigo-500 border px-2 rounded-lg"> + </button>
        <input
          type="text"
          placeholder="input your Todo ..."
          className="pl-2 w-full ml-2 focus:outline-none"
        />
      </div>
    </>
  );
}

export default TodoList;
