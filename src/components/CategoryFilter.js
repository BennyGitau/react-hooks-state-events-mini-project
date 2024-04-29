import React from "react";

function CategoryFilter({ categories,  categorySelected, onCategoryChange }) {
  function handleClick(category){
    onCategoryChange(category)

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category=> 
      <button 
      className={categorySelected === category? 'selected': ""}
      key={category}
      onClick={()=>handleClick(category)}
      >
        {category}
      </button>)}
    </div>
  );
}

export default CategoryFilter;
