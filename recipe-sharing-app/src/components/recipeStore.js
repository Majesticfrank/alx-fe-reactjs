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
}));

export default useRecipeStore;
