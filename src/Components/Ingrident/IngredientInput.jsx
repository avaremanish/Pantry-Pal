import React, { useState } from 'react';
import "./Ingredient.css"

function IngredientInput({ addIngredient }) {
  const [ingredient, setIngredient] = useState('');

  const handleAddIngredient = () => {
    addIngredient(ingredient);
    setIngredient('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleAddIngredient}>Add Ingredient</button>
    </div>
  );
}

export default IngredientInput;
