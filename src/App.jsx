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
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, isCompleted: isCompleted } : task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <CreateTask addTask={addTask} />
      <ViewTasks
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
