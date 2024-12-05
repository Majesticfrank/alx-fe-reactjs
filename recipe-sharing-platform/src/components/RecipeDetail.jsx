/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import RecipeData from '../data.json';



const RecipeDetail = () => {

    const {RecipeId}= useParams();
    const [recipes,setRecipes] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchRecipe= async()=>{
            try{
                const foundRecipe=RecipeData.find((item)=>item.RecipeId ===parseInt(RecipeId));
                setRecipes(foundRecipe);
            }catch(error){
                console.error('Error fetching Recipes', error)
            }finally{
                setLoading(false);
            }
        };
        fetchRecipe();
        
    },[RecipeId]);

    if(loading) return  <div>Loading Recipes details...</div>;
    if (!recipes) return  <div>Recipes NoT Found!</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipes.title}</h1>
      <img
        src={recipes.image}
        alt={recipes.title}
        className="my-4 w-96 h-64 object-cover rounded-lg"
      />
      <p className="text-gray-700 mb-4">{recipes.summary}</p>
      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc pl-6">
        {recipes.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
      <p className="text-gray-700">{recipes.instructions}</p>
    </div>
  );
};

export default RecipeDetail