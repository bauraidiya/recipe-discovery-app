const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  category: String,
  cookingTime: Number,
  ingredients: [String],
  steps: [String],
  image: String,
});

module.exports = mongoose.model("Recipe", recipeSchema);