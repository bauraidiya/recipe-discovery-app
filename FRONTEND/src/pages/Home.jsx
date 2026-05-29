import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const response = await fetch("http://localhost:8080/api/recipes");

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      setRecipes(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching recipes:", err);
      setError("Something went wrong while loading recipes");
      setLoading(false);
    }
  }

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.join(" ").toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) {
    return <h3 className="text-center mt-5">Loading recipes...</h3>;
  }

  if (error) {
    return <h3 className="text-center mt-5 text-danger">{error}</h3>;
  }

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-3">Discover Recipes</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row g-4">
        {filteredRecipes.length === 0 ? (
          <h4>No recipes found</h4>
        ) : (
          filteredRecipes.map((recipe) => (
            <div className="col-md-4" key={recipe._id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;