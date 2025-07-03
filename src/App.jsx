import { useState } from "react";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
  }
  return (
    <>
      <CreateTask addTask={addTask} />
      {tasks.length > 0 &&
        tasks.map((task) => {
          const { id, title, description } = task;
          return (
            <div key={id}>
              <p>{title}</p>
              <p>{description}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
