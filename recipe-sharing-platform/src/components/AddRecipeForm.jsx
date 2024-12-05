/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] =useState("");
    const [ingredients, setIngredients] =useState("");
    const [steps, setSteps] = useState("");
    const [errorMessage, setErrorMessage]=useState("");
    const [successMessage, setSuccessMessage]=useState("");
    
    const handleSubmit =(e) =>{
        e.preventDefault();


        if (!title || !ingredients || !steps){
            setErrorMessage('All fiels are required.');
            return;
        }
        const ingredientsArray =ingredients.split(",").map((item)=> item.trim());
        if(ingredientsArray.length < 2){
            setErrorMessage('please include at least 2 ingredients.');
            return;
        }
        setErrorMessage('');
        setSuccessMessage('Recipe Added successly!');


        const newRecipe ={
            title,
            ingredients:ingredientsArray,
            steps,
        };
        console.log("Form Submitted",newRecipe);
        setTitle("");
        setIngredients("");
        setSteps("");

    };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
    {errorMessage && (
      <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{errorMessage}</div>
    )}
    {successMessage && (
      <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{successMessage}</div>
    )}
    <form onSubmit={handleSubmit}>
      {/* Recipe Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Recipe Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter recipe title"
        />
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
          Ingredients (comma-separated):
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="e.g., flour, sugar, butter"
        ></textarea>
      </div>

      {/* Preparation Steps */}
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
          Preparation Steps:
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Describe the preparation steps"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  </div>
  )
}

export default AddRecipeForm