import type { ingredientItem } from "@/commonTypes/ingredients.types";
import type { recipeItemType } from "@/commonTypes/recipes.types";

type FoundedRecipesProps = {
  selectedIngredients: ingredientItem[];
  recipes: recipeItemType[];
};

export type { FoundedRecipesProps };
