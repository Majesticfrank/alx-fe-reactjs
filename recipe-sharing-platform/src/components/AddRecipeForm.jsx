/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] =useState("");
    const [ingredients, setIngredients] =useState("");
    const [steps, setSteps] = useState("");
    const [errors, setError]=useState("");
    const [successMessage, setSuccessMessage]=useState("");



    const validate = () => {
        const validationErrors = [];
    
        if (!title) {
          validationErrors.push("Recipe title is required.");
        }
        if (!ingredients) {
          validationErrors.push("Ingredients are required.");
        } else {
          const ingredientsArray = ingredients.split(",").map((item) => item.trim());
          if (ingredientsArray.length < 2) {
            validationErrors.push("Please include at least 2 ingredients.");
          }
        }
        if (!steps) {
          validationErrors.push("Preparation steps are required.");
        }
    
        return validationErrors;
      };
    
      // Submission Handler
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationErrors = validate();
    
        if (validationErrors.length > 0) {
          setErrors(validationErrors.join(" "));
          setSuccessMessage(""); // Clear success message if there are errors
          return;
        }
    
        // Clear errors and set success message
        setErrors("");
        setSuccessMessage("Recipe added successfully!");
    
        // Create a new recipe object
        const newRecipe = {
          title,
          ingredients: ingredients.split(",").map((item) => item.trim()),
          steps,
        };
    
        // Log the new recipe (or send it to a server/API)
        console.log("Form Submitted", newRecipe);
    
        // Reset the form fields
        setTitle("");
        setIngredients("");
        setSteps("");
      };
    
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
    {errors && (
      <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{errors}</div>
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