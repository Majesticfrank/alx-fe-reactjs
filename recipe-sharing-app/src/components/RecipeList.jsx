import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import RecipeItem from './RecipeItem';  // Assuming you have a RecipeItem component to display individual recipes
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Get filtered recipes from the store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Get recipes, favorites, and actions from the store
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  // Trigger filtering when the component mounts or the search term changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]); // Dependency ensures it triggers when necessary

  return (
    <div>
      <h2>Recipe List</h2>

      {/* If no filtered recipes, display a message */}
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeItem recipe={recipe} />
            {/* Add or Remove from favorites */}
            {favorites.includes(recipe.id) ? (
              <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

