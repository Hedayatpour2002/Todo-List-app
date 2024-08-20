import PropTypes from "prop-types";
import { useState } from "react";

export default function Task({
  id,
  title,
  isCompleted,
  deleteTask,
  updateTaskStatus,
}) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  function changeHandler() {
    setIsChecked((prev) => !prev);
    updateTaskStatus(id);
  }

  return (
    <div className="bg-gray-500 rounded-lg flex gap-3 items-start p-4 border border-gray-400">
      <input type="checkbox" checked={isChecked} onChange={changeHandler} />

      <p
        className={`${
          isChecked ? "text-gray-300 line-through" : "text-gray-100"
        } flex-grow`}
      >
        {title}
      </p>
      <button className="flex-shrink-0" onClick={() => deleteTask(id)}>
        <img
          src="./src/images/trash.svg"
          alt="delete-icon"
          className="md:scale-110 lg:scale-125"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
};
