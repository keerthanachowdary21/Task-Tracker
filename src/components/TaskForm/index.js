import { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file

function TaskForm({ onAddTask, onEditTask, editTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  // Populate the form when editing a task
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDueDate(editTask.dueDate);
      setStatus(editTask.status);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description, dueDate, status };

    if (editTask) {
      // If editing, call update
      onEditTask(newTask);
    } else {
      // If adding a new task
      onAddTask(newTask);
    }

    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="task-form-input"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="task-form-textarea"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="task-form-input"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-form-select"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="task-form-button">
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
