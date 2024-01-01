import React from 'react';

function TaskItem({ task, onToggleCompleted }) {
  const handleCheckboxChange = () => {
    onToggleCompleted(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </li>
  );
}

export default TaskItem;