import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchQuery: '', // ✅ added search state
  setSearchQuery: (query) => set({ searchQuery: query }), // ✅ action

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

export default useRecipeStore;

