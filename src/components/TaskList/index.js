import React from 'react';
import TaskCard from '../TaskCard'; // Adjust the path if needed
import './index.css'; // Ensure this CSS file exists for styling

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <div className="task-list">
      {/* Display a message if there are no tasks */}
      {tasks.length === 0 ? (
        <div className="task-list-empty">No tasks available</div>
      ) : (
        // Render TaskCard components for each task
        tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onDelete={() => onDeleteTask(task)}
            onEdit={() => onEditTask(task)}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
