import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        🍽️ Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition transform duration-200 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
