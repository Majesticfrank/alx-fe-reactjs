import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import RecipeItem from './RecipeItem';  // Assuming you have a RecipeItem component to display individual recipes
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    // Trigger filtering action when the component mounts or the search term changes
    filterRecipes();
  }, []); // Empty dependency array ensures it only runs on mount

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
};

export default RecipeList;

