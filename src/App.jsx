import { useState } from "react";
import CreateTask from "./components/CreateTask";
import ViewTasks from "./components/ViewTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks((prevTasks) => [
      { ...task, id: Date.now(), isCompleted: false },
      ...prevTasks,
    ]);
  }
  function completeTask(id, isCompleted) {
    const updatedTask = tasks.map((task) => {
      return task.id === id ? { ...task, isCompleted: isCompleted } : task;
    });
    setTasks(updatedTask);
  }
  return (
    <>
      <CreateTask addTask={addTask} />
      <ViewTasks tasks={tasks} completeTask={completeTask} />
    </>
  );
}

export default App;
