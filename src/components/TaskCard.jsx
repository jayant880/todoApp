import { useState } from "react";
import "../styles/TaskCard.css";

function TaskCard({ task, completeTask, deleteTask, updateTask }) {
  const { id, title, description, isCompleted, dueDate } = task;
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

  // Calculate progress based on due date
  function calculateProgress() {
    if (!dueDate) return 0;

    const now = new Date();
    const due = new Date(dueDate);
    const created = new Date(
      task.createdDate || Date.now() - 7 * 24 * 60 * 60 * 1000
    );

    const totalTime = due.getTime() - created.getTime();
    const elapsedTime = now.getTime() - created.getTime();

    if (totalTime <= 0) return 100;

    const progress = Math.min(
      100,
      Math.max(0, (elapsedTime / totalTime) * 100)
    );
    return progress;
  }

  function getProgressColor(progress) {
    if (progress < 50) return "#10b981"; // Green
    if (progress < 75) return "#f59e0b"; // Yellow
    return "#ef4444"; // Red
  }

  const progress = calculateProgress();
  const progressColor = getProgressColor(progress);

  return (
    <div className={`card ${isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        name="checkbox"
        id={`checkbox-${id}`}
        checked={isCompleted}
        value={isCompleted}
        onChange={handleCheckbox}
      />
      {!isEditing ? (
        <>
          <div className="card__content">
            <p className="content__title">{title}</p>
            <p className="content__description">{description}</p>
            {dueDate && <p className="content__description">Due: {dueDate}</p>}
            {dueDate && (
              <div className="card__progressBar">
                <div
                  className="progressBar__meter"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: progressColor,
                  }}
                ></div>
              </div>
            )}
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
            <input
              type="date"
              className="content__description"
              onChange={handleChange}
              value={editTask.dueDate}
              name="dueDate"
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
