import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categoryFilter, setCategoryFilter] = useState('All')

  function handleCategoryChange(category){
    setCategoryFilter(category)
  }
  function deleteItem(taskId){
    const tasksAfterDelete = tasks.filter((task)=> task.id !== taskId)
    setTasks(tasksAfterDelete)
  }
  function handleFormSubmit(newItem){
    const id= tasks.length +1
    const newTasks = [...tasks,{id, ...newItem}]
    setTasks(newTasks)
  }

const filteredTasks = categoryFilter === 'All'? tasks : tasks.filter((task)=> task.category=== categoryFilter)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categorySelected={categoryFilter}
        categories={CATEGORIES} 
        onCategoryChange={handleCategoryChange}/>
      <NewTaskForm  
        categories={CATEGORIES} 
        onTaskFormSubmit={handleFormSubmit}/>
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={deleteItem} />
    </div>
  );
}

export default App;
