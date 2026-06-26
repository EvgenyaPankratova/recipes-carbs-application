import type { ingredientItem } from "@/commonTypes/ingredients.types";

type recipeItemType = {
  id: number;
  slug: string;
  title: string;
  kcal: number;
  ingredients: ingredientItem[];
  img: string;
};

export type { recipeItemType };
