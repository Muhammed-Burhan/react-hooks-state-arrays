import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods((prevFoods) => {
      return [...prevFoods, newFood];
    });
  }
  /*const handleLiClick = (id) => {
    const newFoodArray = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(newFoodArray);
  }; */
  const handleLiClick = (id) => {
    const newFoodArray = foods.map((food) =>
      food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food
    );
    setFoods(newFoodArray);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };
  const fooddisplay = foods.filter((food) =>
    filterBy === "All" ? true : food.cuisine === filterBy
  );
  const foodList = fooddisplay.map((food) => {
    return (
      <li key={food.id} onClick={() => handleLiClick(food.id)}>
        {food.name} | cuisine: {food.cuisine} | heatLevel: {food.heatLevel}
      </li>
    );
  });

  return (
    <div>
      <select name="filter" onChange={(e) => handleFilterChange(e)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
