import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      </label>
      <label>
        Category:
        <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
