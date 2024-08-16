import { useState } from "react";
import TaskForm from "./taskForm";
import PropTypes from "prop-types";
import Task from "./Task";
import { Fragment } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(title) {
    const id = tasks.length ? tasks[tasks.length - 1]?.id + 1 : 1;

    setTasks([...tasks, { id, title, isCompleted: false }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function updateTaskStatus(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function getCompletedTasksCount() {
    return tasks.reduce(
      (count, task) => (task.isCompleted ? count + 1 : count),
      0
    );
  }
  return (
    <main className="text-sm md:text-base lg:text-lg">
      <TaskForm addNewTask={addNewTask} />

      <section className="container pt-16  grid gap-6">
        <div className="flex items-center justify-between font-bold">
          <div className="flex gap-2">
            <span className="text-blue">Tasks created</span>
            <RoundedGrayBox title={tasks.length} />
          </div>
          <div className="flex gap-2">
            <span className="text-purple">Completed</span>
            <RoundedGrayBox
              title={`${getCompletedTasksCount()} of ${tasks.length}`}
            />
          </div>
        </div>

        {tasks.length ? (
          tasks.map((task) => (
            <Fragment key={task.id}>
              <Task
                {...task}
                deleteTask={deleteTask}
                updateTaskStatus={updateTaskStatus}
              />
            </Fragment>
          ))
        ) : (
          <div className="border-t border-gray-400 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 px-6 py-16">
            <img
              src="./src/images/Clipboard.svg"
              alt="tasks-list-icon"
              className="md:scale-110 lg:scale-125"
              width={56}
              height={56}
            />
            <div className="text-gray-300 text-center">
              <p className="font-bold text-base md:text-lg lg:text-xl">
                You haven&apos;t added any tasks yet
              </p>
              <p>Create and organize your to-do list.</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function RoundedGrayBox({ title }) {
  return (
    <div className="bg-gray-400 text-gray-200 rounded-full text-xs md:text-sm lg:text-base py-0.5 px-2 flex items-center justify-center">
      {title}
    </div>
  );
}

RoundedGrayBox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
