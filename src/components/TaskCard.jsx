import "../styles/TaskCard.css";

function TaskCard({ task, completeTask, deleteTask }) {
  const { id, title, description, isCompleted } = task;

  function handleChange() {
    completeTask(id, !isCompleted);
  }

  function handleDelete() {
    if (confirm("Are you sure you want to delete this?")) deleteTask(id);
  }

  return (
    <div className={`card ${isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={isCompleted}
        value={isCompleted}
        onChange={handleChange}
      />
      <div className="card__content">
        <p className="content__title">{title}</p>
        <p className="content__description">{description}</p>
      </div>
      <button className="card__button edit">
        <i className="fas fa-edit"></i>
      </button>
      <button className="card__button delete" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default TaskCard;
