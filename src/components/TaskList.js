import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  //console.log(tasks)
  
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task)=> (
          <Task 
            key={task.id}
            task={task} 
            onDelete={()=>onDeleteTask(task.id)}/>

        ))}      
    </div>
  );
}

export default TaskList;
