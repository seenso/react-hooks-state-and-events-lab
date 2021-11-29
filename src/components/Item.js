import { React, useState } from "react";

function Item({ name, category }) {
  let [ inCart, setInCart ] = useState("");
  const cartClass = inCart ? "in-cart" : ""
  function handleAddCart() {
    setInCart(inCart = !inCart);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={() => {handleAddCart()}}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
