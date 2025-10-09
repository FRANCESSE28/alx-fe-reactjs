import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="text-green-700 hover:underline font-medium mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;
