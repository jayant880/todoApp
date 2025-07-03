import { useState } from "react";
import "../styles/CreateTask.css";

const defaultTask = { title: "", description: "" };

function CreateTask({ addTask }) {
  const [task, setTask] = useState(defaultTask);

  function handleSubmit(e) {
    e.preventDefault();
    // if title is empty
    if (!task.title.trim()) return;

    addTask(task);
    setTask(defaultTask);
  }

  function handleChange(e) {
    setTask(() => {
      return { ...task, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          id="title"
          value={task.title}
          placeholder="Enter Task"
          onChange={handleChange}
          className="form__input"
        />
        <input
          type="text"
          name="description"
          id="description"
          value={task.description}
          placeholder="Add description"
          onChange={handleChange}
          className="form__input"
        />
        <button type="submit" className="form__button">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
