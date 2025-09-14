import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
