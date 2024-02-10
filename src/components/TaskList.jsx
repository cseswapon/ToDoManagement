import { Table } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  const priorityClasses = {
    low: "text-primary fw-bold",
    medium: "text-warning fw-bold",
    high: "text-danger fw-bold",
  };
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {tasks.length > 0 && (
        // eslint-disable-next-line react/prop-types
        <h1 className="my-3 text-center">Total Task {tasks.length}</h1>
      )}
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
