/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import RecipeData from '../data.json';
import {Link} from "react-router-dom";

const HomePage = () => {
    const [recipes,setRecipes] = useState([]);
    

    useEffect(()=>{
       setRecipes(RecipeData);
    }, []);


  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
    <ul>
      {recipes.map((recipe) => (
       <li key={recipe.id} className="mb-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-lg font-semibold">{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-48 h-32 object-cover rounded-lg"
          />
          <p>{recipe.summary}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>


        </li>

      ))}
    </ul>

    
    <Link to="/add-recipe" className="text-blue-500 hover:underline">
Add a New Recipe
</Link>
  </div>
  
  );
};

export default HomePage