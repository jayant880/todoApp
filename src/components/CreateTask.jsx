import { useState } from "react";
import "../styles/CreateTask.css";

const defaultTask = {
  title: "",
  description: "",
  isCompleted: false,
  dueDate: "",
  createdAt: "",
};

function CreateTask({ addTask }) {
  const [task, setTask] = useState(defaultTask);
  const [toggleCustomDate, setToggleCustomDate] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // if title is empty
    if (!task.title.trim()) return;

    // Add createdAt timestamp
    const taskWithCreatedAt = {
      ...task,
      createdAt: new Date().toISOString(),
    };

    addTask(taskWithCreatedAt);
    setTask(defaultTask);
    setToggleCustomDate(false);
  }

  function handleChange(e) {
    setTask(() => {
      return { ...task, [e.target.name]: e.target.value };
    });
  }

  function handleDueDate(e) {
    e.preventDefault();
    const today = new Date();
    const dueDate = today.toISOString().split("T")[0];
    setTask(() => {
      return { ...task, dueDate: dueDate };
    });
    setToggleCustomDate(false);
  }

  function handleCustomDate(e) {
    e.preventDefault();
    setToggleCustomDate(!toggleCustomDate);
  }

  function handleTomorrow(e) {
    e.preventDefault();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dueDate = tomorrow.toISOString().split("T")[0];
    setTask(() => {
      return { ...task, dueDate: dueDate };
    });
    setToggleCustomDate(false);
  }

  function handleThisWeek(e) {
    e.preventDefault();
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const dueDate = nextWeek.toISOString().split("T")[0];
    setTask(() => {
      return { ...task, dueDate: dueDate };
    });
    setToggleCustomDate(false);
  }

  function clearDueDate(e) {
    e.preventDefault();
    setTask(() => {
      return { ...task, dueDate: "" };
    });
    setToggleCustomDate(false);
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

        {/* Due Date Section */}
        <div className="due-date-section">
          <label className="section-label">Due Date</label>
          {task.dueDate && (
            <div className="selected-date">
              <span>
                Selected: {new Date(task.dueDate).toLocaleDateString()}
              </span>
              <button
                type="button"
                onClick={clearDueDate}
                className="clear-date-btn"
                title="Clear due date"
              >
                ×
              </button>
            </div>
          )}

          <div className="date-buttons">
            <button
              type="button"
              onClick={handleDueDate}
              className={`date-btn ${
                task.dueDate === new Date().toISOString().split("T")[0]
                  ? "active"
                  : ""
              }`}
            >
              <i className="fas fa-calendar-day"></i>
              Today
            </button>

            <button
              type="button"
              onClick={handleTomorrow}
              className={`date-btn ${
                task.dueDate ===
                new Date(Date.now() + 86400000).toISOString().split("T")[0]
                  ? "active"
                  : ""
              }`}
            >
              <i className="fas fa-sun"></i>
              Tomorrow
            </button>

            <button type="button" onClick={handleThisWeek} className="date-btn">
              <i className="fas fa-calendar-week"></i>
              Next Week
            </button>

            <button
              type="button"
              onClick={handleCustomDate}
              className={`date-btn custom ${toggleCustomDate ? "active" : ""}`}
            >
              <i className="fas fa-calendar-alt"></i>
              Custom Date
            </button>
          </div>

          {toggleCustomDate && (
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="form__input date-input"
              min={new Date().toISOString().split("T")[0]}
            />
          )}
        </div>

        <button
          type="submit"
          className="form__button"
          disabled={!task.title.trim()}
        >
          <i className="fas fa-plus"></i>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
