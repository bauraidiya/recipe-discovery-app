function RecipeCard({ recipe }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={recipe.image}
        className="card-img-top recipe-img"
        alt={recipe.title}
      />

      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>

        <p className="card-text mb-1">
          <strong>Category:</strong> {recipe.category}
        </p>

        <p className="card-text mb-3">
          <strong>Time:</strong> {recipe.time} mins
        </p>

        <button className="btn btn-warning w-100">View Recipe</button>
      </div>
    </div>
  );
}

export default RecipeCard;