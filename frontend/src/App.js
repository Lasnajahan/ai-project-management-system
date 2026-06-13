import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  const addTask = () => {
    if (!title || !description) {
      alert("Please enter title and description");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      status: "pending",
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: "completed" }
          : task
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Project Management System</h1>

      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addTask}>Add Task</button>
      <h2>Dashboard</h2>

<p>Total Tasks: {tasks.length}</p>

<p>
  Completed Tasks: {
    tasks.filter(task => task.status === "completed").length
  }
</p>

<p>
  Pending Tasks: {
    tasks.filter(task => task.status === "pending").length
  }
</p>

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <b>{task.title}</b>
              <br />
              {task.description}
              <br />
              Status: {task.status}
              <br />
              <br />

              <button onClick={() => completeTask(task.id)}>
                Complete
              </button>

              {"  "}

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>

              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;