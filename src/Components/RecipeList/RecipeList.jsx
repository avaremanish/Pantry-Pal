import React from 'react';
import "./recipeList.css"
function RecipeList({ ingredients }) {
  // You can fetch and display recipes here based on the entered ingredients

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
