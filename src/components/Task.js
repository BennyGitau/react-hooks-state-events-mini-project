import React from "react";

function Task({task, onDelete }) {
  const {id, text,category} = task

  function handleDelete(){
    onDelete(id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"  onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
