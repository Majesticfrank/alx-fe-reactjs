/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import RecipeData from '../data.json';



const RecipeDetail = () => {

    const {id}= useParams();
    const [recipes,setRecipes] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchRecipe= async()=>{
            try{
                const foundRecipe=RecipeData.find((item)=>item.id ===parseInt(id));
                setRecipes(foundRecipe);
            }catch(error){
                console.error('Error fetching Recipes', error)
            }finally{
                setLoading(false);
            }
        };
        fetchRecipe();
        
    },[id]);

    if(loading) return  <div>Loading Recipes details...</div>;
    if (!recipes) return  <div>Recipes NoT Found!</div>;
  return (
<div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
  <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipes.title}</h1>
  <img
    src={recipes.image}
    alt={recipes.title}
    className="my-4 w-full h-64 object-cover rounded-lg"
  />
  <p className="text-gray-700 mb-4">{recipes.summary}</p>
  <div>
    <h2 className="text-xl font-semibold text-gray-800">Ingredients:</h2>
    <ul className="list-disc pl-6 mb-4">
      {recipes.ingredients.map((ingredient, index) => (
        <li key={index} className="text-gray-600">
          {ingredient}
        </li>
      ))}
    </ul>
  </div>
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mt-4">Instructions:</h2>
    <p className="text-gray-700">{recipes.instructions}</p>
  </div>
</div>
  );
};

export default RecipeDetail