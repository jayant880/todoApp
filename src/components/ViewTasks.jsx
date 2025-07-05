import TaskCard from "./TaskCard";
import "../styles/ViewTask.css";

function ViewTasks({ tasks, completeTask, deleteTask, updateTask }) {
  // empty state
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon">
          <i className="fa-solid fa-clipboard"></i>
        </div>
        <h3 className="empty-state__title">No Tasks yet</h3>
        <p className="empty-state__description">
          Create Your first task to get started organizing your day!
        </p>
      </div>
    );
  }

  return (
    <div className="tasklist__container">
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <TaskCard
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              key={task.id}
            />
          );
        })}
    </div>
  );
}

export default ViewTasks;
