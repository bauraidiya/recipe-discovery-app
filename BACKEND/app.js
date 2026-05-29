const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");
require("dotenv").config();
const app = express();



app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB error:", err);
  });

app.get("/", (req, res) => {
  res.send("Recipe API is working");
});

app.get("/api/recipes", async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

app.post("/api/recipes", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { title, category, cookingTime, ingredients, steps, image } = req.body;

    if (!title || !category) {
      return res.status(400).json({ message: "Title and category are required" });
    }

    const recipe = new Recipe({
      title,
      category,
      cookingTime: Number(cookingTime) || 30,
      ingredients: Array.isArray(ingredients)
        ? ingredients
        : ingredients
        ? ingredients.split(",")
        : ["Not added"],
      steps: Array.isArray(steps)
        ? steps
        : steps
        ? steps.split(",")
        : ["Not added"],
      image:
        image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
    });

    await recipe.save();

    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(8080, () => {
    console.log("Server Started");
});