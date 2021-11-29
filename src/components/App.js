import { React, useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  let [isDarkMode, setDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"


  function handleDarkMode() {
    setDarkMode(isDarkMode = !isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button className={appClass} onClick={()=>handleDarkMode()}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
