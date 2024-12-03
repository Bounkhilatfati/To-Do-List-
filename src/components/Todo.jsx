import { useState } from "react";
import "./style.css"

export default function Todo() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = () => {
    if (task !== "") {
      setTasks([...tasks, task]); 
      setTask(""); 
    }
  };
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleInputChange}
          className="task-input"
        />
        <button onClick={handleSubmit} className="submit-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{t}</span>
            <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
