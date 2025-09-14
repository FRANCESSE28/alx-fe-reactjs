// src/components/RecipeDetails.jsx
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Edit + Delete options */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
