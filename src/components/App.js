import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from '../data';

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;
