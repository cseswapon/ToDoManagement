import { Table } from "react-bootstrap";

const TaskList = ({
  // eslint-disable-next-line react/prop-types
  tasks,
  // eslint-disable-next-line react/prop-types
  deleteTask,
  // eslint-disable-next-line react/prop-types
  toggleComplete,
  // eslint-disable-next-line react/prop-types
  editTask,
  // eslint-disable-next-line react/prop-types
  filterTasks,
}) => {
  const priorityClasses = {
    low: "text-primary fw-bold",
    medium: "text-warning fw-bold",
    high: "text-danger fw-bold",
  };
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {tasks.length > 0 && (
        <div className="d-flex justify-content-between my-4">
          <div>
            {/* eslint-disable-next-line react/prop-types */}
            <h4>Total Task {tasks.length}</h4>
          </div>
          <div>
            <button
              className="btn btn-sm btn-primary me-2"
              onClick={() => filterTasks("low")}
            >
              Low Priority
            </button>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => filterTasks("medium")}
            >
              Medium Priority
            </button>
            <button
              className="btn btn-sm btn-danger me-2"
              onClick={() => filterTasks("high")}
            >
              High Priority
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={() => filterTasks(null)}
            >
              Show All Task
            </button>
          </div>
        </div>
      )}
      <hr className="my-4" />
      <Table className="text-center" striped="columns">
        <thead>
          <tr>
            <th>CheckBox</th>
            <th>Serial Number</th>
            <th>Details</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types */}
          {tasks?.map((task, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
              </td>
              <td>{i + 1}</td>
              <td>{task.text}</td>
              <td
                className={`badge text-white mt-2 ${
                  task.completed ? "bg-success" : "bg-warning"
                }`}
              >
                {task.completed ? "Complete" : "Pending"}
              </td>
              <td className={priorityClasses[task.priority]}>
                {task.priority}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger mx-2"
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
