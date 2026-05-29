import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="recipe_navbar">
      <div className="logo">
        <Link to="/">RecipeHub</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/create">Create Recipe</Link>
        </li>

        <li>
          <Link to="/saved">Saved Recipes</Link>
        </li>

        <li>
          <Link to="/my-recipes">My Recipes</Link>
        </li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;