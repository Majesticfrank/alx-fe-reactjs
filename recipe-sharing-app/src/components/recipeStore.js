import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  // Action to set a list of recipes
  setRecipes: (recipes) => set({ recipes }),
  
  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  
  
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  

  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  favorites: [], // Array to store favorite recipe IDs
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId] // Adds recipe to favorites
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId) // Removes recipe from favorites
  })),
  recommendations: [], // Array to hold recommended recipes
  generateRecommendations: () => set(state => {
    // Simple mock recommendation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomly select a few recipes
    );
    return { recommendations: recommended }; // Update recommendations
  }),
}));

export default useRecipeStore;
