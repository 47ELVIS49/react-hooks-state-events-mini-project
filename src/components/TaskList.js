import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => onDelete(task)} />
      ))}
    </div>
  );
};

export default TaskList;
