import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes); // Get all recipes
  const favorites = useRecipeStore(state => state.favorites); // Get favorite recipe IDs

  // Get the favorite recipes by matching the favorite IDs
  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
