import { useState } from "react";
import "../styles/TaskCard.css";

function TaskCard({ task, completeTask, deleteTask, updateTask }) {
  const { id, title, description, isCompleted } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  function handleCheckbox() {
    completeTask(id, !isCompleted);
    setEditTask({ ...task, isCompleted: !isCompleted });
  }

  function handleDelete() {
    if (confirm("Are you sure you want to delete this?")) deleteTask(id);
  }

  function handleChange(e) {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  }

  function handleSave() {
    setIsEditing(false);
    updateTask(id, editTask);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditTask(task);
  }

  return (
    <div className={`card ${isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={isCompleted}
        value={isCompleted}
        onChange={handleCheckbox}
      />
      {!isEditing ? (
        <>
          <div className="card__content">
            <p className="content__title">{title}</p>
            <p className="content__description">{description}</p>
          </div>
          <button
            className="card__button edit"
            onClick={() => setIsEditing(true)}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button className="card__button delete" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </>
      ) : (
        <>
          <div className="card__content">
            <input
              className="content__title"
              placeholder={title}
              onChange={handleChange}
              value={editTask.title}
              name="title"
            />
            <input
              className="content__description"
              placeholder={description}
              onChange={handleChange}
              value={editTask.description}
              name="description"
            />
          </div>
          <button className="card__button delete" onClick={handleCancel}>
            <i className="fa-solid fa-times"></i>
          </button>
          <button className="card__button edit" onClick={handleSave}>
            <i className="fas fa-save"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default TaskCard;
