import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  const [filteredTasks, setFilteredTasks] = useState([]);

  // Filter tasks based on priority
  const filterTasks = (priority) => {
    setFilteredTasks(tasks.filter((task) => task.priority === priority));
  };


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), ...task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Todo List</h1><hr />
      <TaskForm addTask={addTask} /><hr />
      <TaskList
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
        filterTasks={filterTasks}
      />
    </div>
  );
};

export default App;
