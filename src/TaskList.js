import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleCompleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleCompleted={onToggleCompleted} />
      ))}
    </ul>
  );
}

export default TaskList;