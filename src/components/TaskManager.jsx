import { useState } from "react";
import TaskForm from "./taskForm";
import TaskList from "./TaskList";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  function addNewTask(title) {
    setTasks([...tasks, { title, isCompleted: false }]);
  }
  return (
    <main className="">
      <TaskForm addNewTask={addNewTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}
