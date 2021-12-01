import { React, useState } from "react";
import { Input, Button } from "antd";



const AddFoodForm = (props) => {
  const [formState, setFormState] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form was prevented to submit");
    props.createFood(formState);
    setFormState({});
  }

  function handleInput(event) {
    let { name, value, type, checked } = event.target;
    if (type === "checkbox") value = checked;
    setFormState(Object.assign({}, formState, { [name]: value }));
  }

  return (
    <div className="addFood">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Add an image:</label>
        <Input
          type="text"
          name="image"
          placeholder="URL here"
          value={formState.image || ""}
          onChange={handleInput}
        />

        <label>Name:</label>
        <Input
          type="text"
          name="name"
          placeholder="Food name"
          value={formState.name || ""}
          onChange={handleInput}
        />

        <label>Calories:</label>
        <Input
          type="number"
          name="calories"
          placeholder="420"
          value={formState.calories || ""}
          onChange={handleInput}
        />

        <label>Servings:</label>
        <Input
          type="number"
          name="servings"
          placeholder="4"
          value={formState.servings || ""}
          onChange={handleInput}
        />

        <br />
        <button type="submit">Add food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
