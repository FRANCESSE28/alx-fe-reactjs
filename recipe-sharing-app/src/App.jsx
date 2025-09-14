import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        {/* Homepage shows form + recipe list */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        {/* Details page */}
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

// ✅ Helper wrapper to grab :id from the URL
import { useParams } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
