import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ViewTasks from "./components/ViewTasks";
import { loadTaskData, saveTaskData } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState(loadTaskData);

  useEffect(() => {
    saveTaskData(tasks);
  }, [tasks]);

  function addTask(task) {
    const newTasks = [
      { ...task, id: Date.now(), isCompleted: false },
      ...tasks,
    ];
    setTasks(newTasks);
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

  function updateTask(id, updateTask) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...updateTask } : task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <CreateTask addTask={addTask} />
      <ViewTasks
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default App;
