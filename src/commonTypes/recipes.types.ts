import type { ingredientItem } from "@/commonTypes/ingredients.types";

type recipeItem = {
  id: number;
  slug: string;
  title: string;
  kcal: number;
  ingredients: ingredientItem[];
  img: string;
};

export type { recipeItem };
