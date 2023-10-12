import React, { useState } from 'react';
import IngredientInput from './Components/Ingrident/IngredientInput';
import RecipeList from './Components/RecipeList/RecipeList';
import "../src/App.css"

function App() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div className="App">
      <h1>Smart Recipe Manager</h1>
      <IngredientInput addIngredient={addIngredient} />
      <RecipeList ingredients={ingredients} />
    
    </div>
  );
}

export default App;
