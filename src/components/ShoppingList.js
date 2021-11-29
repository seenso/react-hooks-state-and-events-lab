import { React, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    console.log("FILTER CHANGED", event.target.value);
    selectedCategory = event.target.value;
    setSelectedCategory(() => {
      let filteredItems = items.filter(item => item.category === selectedCategory);
      console.log("FILTERED ITEMS", filteredItems);

    });
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => {handleFilterChange(e)}}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
