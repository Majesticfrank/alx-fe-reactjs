import {create} from 'zustand'

  export const useRecipeStore = create((set) => ({
    recipes : [],
    addRecipe: (newRecipe) => set((state)=>({recipes: [...state.recipes,newRecipe]})),
    removeRecipe:(newRecipeId)=>set((state)=> ({recipes: state.recipes.filter(newRecipe => newRecipe.id !== newRecipeId)})),
    clearRecipe:() => set({recipes: []})


 }));