import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
