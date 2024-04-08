import CheckBox from "./CheckBox";

function Task({ name, done }) {
  return (
    <div className="bg-gray-100 m-2 rounded-md flex items-center">
      <CheckBox
        checked={done}
        onClick={() => alert("clicked")}
      />

      <p className="text-center">{name}</p>
    </div>
  );
}

export default Task;
