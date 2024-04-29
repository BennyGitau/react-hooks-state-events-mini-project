import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText]= useState('')
  const [category, setCategory] = useState('All')

  
const newItem = {
    text: text,
    category: category
}
  
function handleSubmit(e){
  e.preventDefault()
  if(text.trim() === '') {
    return 'Add new Item'
  } else {
    onTaskFormSubmit(newItem)
    setText('')
    setCategory('')
  }

  

}
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
            {categories.map(category => <option key={category}name={category}>{category}</option>)}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
