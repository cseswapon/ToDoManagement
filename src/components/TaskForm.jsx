import{ useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    text: "",
    priority: "low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.text.trim()) return;
    addTask(task);
    setTask({ text: "", priority: "low" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          name="text"
          value={task.text}
          onChange={handleChange}
        />
      </div>
      <div className="form-group my-3">
        <select
          className="form-control"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
