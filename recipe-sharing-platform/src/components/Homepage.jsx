/* eslint-disable no-unused-vars */
import React, {useEffect,useState} from 'react';
import RecipeData from "../data.json"

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] =useState(true)


    useEffect(()=>{

        const fetchRecipes = async()=>{
            try{
                
                setRecipes(RecipeData);
                setLoading(false);

            } catch (error){
                console.error("Error loading recipies:", error);
                setLoading(false);

            }
        };
        fetchRecipes();
    }, []);
    if(loading){
        return <div>Loading recipes...</div>;
    }

  return (

    <div className="bg-gray-100 min-h-screen p-6">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Recipe List</h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recipes.map((recipe) => (
      <li
        key={recipe.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">{recipe.title}</h2>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>
        </div>
      </li>
        ))}
      </ul>

    </div>

   
  );
};

export default Homepage