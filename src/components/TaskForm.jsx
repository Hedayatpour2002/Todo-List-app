import PropTypes from "prop-types";
import { useState } from "react";

export default function TaskForm({ addNewTask }) {
  const [newTask, setNewTask] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const trimmedTask = newTask.trim();
    if (trimmedTask) {
      addNewTask(trimmedTask);
    }

    setNewTask("");
  }
  return (
    <form
      className="flex justify-center gap-2 bg-linearGradientGray700To600"
      onSubmit={(event) => submitHandler(event)}
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        className="max-w-[638px] w-full bg-gray-500 placeholder:text-gray-300 text-base p-4 border border-gray-700 focus:border-purple-dark text-gray-100 outline-none rounded-lg"
      />
      <button className="flex items-center justify-center text-sm font-bold text-gray-100 bg-blue-dark hover:bg-blue p-4 gap-2 rounded-lg">
        create
        <img
          src="./src/images/plus.svg"
          alt="plus-icon"
          width={16}
          height={16}
        />
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};
