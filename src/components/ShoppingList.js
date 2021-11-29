import { React, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(event) {
    setSelectedCategory(selectedCategory = event.target.value);
  };

  function renderItems(list) {
    return (list.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    )));
  }

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
        {selectedCategory === "All" ? renderItems(items) : renderItems(items.filter(item => item.category === selectedCategory))}
      </ul>
    </div>
  );
}

export default ShoppingList;
