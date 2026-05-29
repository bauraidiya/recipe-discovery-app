import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRecipe() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    cookingTime: "",
    ingredients: "",
    steps: "",
    image: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const recipeData = {
      ...formData,
      cookingTime: Number(formData.cookingTime),
      ingredients: formData.ingredients.split(","),
      steps: formData.steps.split(",")
    };

    try {
      const response = await fetch("http://localhost:8080/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipeData)
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Recipe created successfully");

        navigate("/");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Create Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="title"
          placeholder="Recipe title"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="cookingTime"
          placeholder="Cooking time"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="ingredients"
          placeholder="Ingredients comma separated"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="steps"
          placeholder="Steps comma separated"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button className="btn btn-warning">
          Create Recipe
        </button>
      </form>
    </div>
  );
}

export default NewRecipe;