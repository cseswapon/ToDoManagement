// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <ul className="list-group">
      {/* eslint-disable-next-line react/prop-types */}
      {tasks?.map((task) => (
        <li
          key={task.id}
          className={`list-group-item ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span className="ml-2">{task.text}</span>
            </div>
            <div>
              <button
                className="btn btn-sm btn-danger mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={() =>
                  editTask(task.id, {
                    text: prompt("Edit task:", task.text) || task.text,
                  })
                }
              >
                Edit
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
