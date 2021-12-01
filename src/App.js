import "./App.css";
import { useState } from "react";
import FoodList from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [foods, setFoods] = useState(FoodList);
  const [filteredFoods, setFilteredFoods] = useState(FoodList);
  const [visibility, setVisibility] = useState("none");

  function createFood(body) {
    body._id = parseInt(Math.random() * 10000);
    setFoods([body, ...foods]);
    setFilteredFoods([body, ...foods]);
  }

  function filteredFoodsCB(letter) {
    if (letter === "default") {
      console.log("hey");
    } else {
      setFilteredFoods(
        foods.filter((food) =>
          food.name.toLowerCase().includes(letter.toLowerCase())
        )
      );
    }
  }

  function deleteCB(index) {
    setFoods(foods.filter((food) => food.index !== index));
    setFilteredFoods(filteredFoods.filter((food) => food.index !== index));
  }

  function hideForm() {
    return visibility === "none"
      ? setVisibility("block")
      : setVisibility("none");
  }

  return (
    <div className="App">
      <button onClick={hideForm}>HIDE CREATION FORM</button>
      <div style={{ display: visibility }}>
        <AddFoodForm createFood={createFood} />
      </div>
      <SearchBar filteredFoodsCB={filteredFoodsCB} />
        {filteredFoods.length === 0 ? (<div>no food, sorry</div>) : console.log("hello")}
      <div className="flex">
        {filteredFoods.map((food, index) => {
          food.index = index;
          return <FoodBox food={food} index={index} deleteCB={deleteCB} />;
        })}
      </div>
    </div>
  )
}

export default App;
