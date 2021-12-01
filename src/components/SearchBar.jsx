import React from "react";

const SearchBar = (props) => {
    function handleSubmit(event){
        event.preventDefault()
        if(event.target.value === "") {
            props.filteredFoodsCB("default")
        }
        props.filteredFoodsCB(event.target.value)
    }
  return (
    <form onChange={handleSubmit}>
      <input
        type="text"
        placeholder="Search food"
      />
    </form>
  );
};

export default SearchBar;
