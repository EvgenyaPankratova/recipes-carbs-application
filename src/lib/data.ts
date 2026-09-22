import type { ingredientItem } from "@/commonTypes/ingredients.types";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import { supabase } from "@/lib/supabase";

type IngredientRow = {
  id: number;
  name: string;
  img_url: string | null;
};

type RecipeRow = {
  id: number;
  slug: string;
  title: string;
  kcal: number;
  img_url: string | null;
  recipe_ingredients: {
    ingredients: IngredientRow[];
  }[];
};

const mapIngredient = (row: IngredientRow): ingredientItem => ({
  id: row.id,
  item: row.name,
  img: row.img_url ?? "",
});

const mapRecipe = (row: RecipeRow): recipeItemType => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  kcal: row.kcal,
  img: row.img_url ?? "",
  ingredients: row.recipe_ingredients
    .flatMap((relation) => relation.ingredients)
    .map(mapIngredient),
});

const RECIPE_SELECT = `
  id, slug, title, kcal, img_url,
  recipe_ingredients(ingredients(id, name, img_url))
`;

export const getIngredients = async (): Promise<ingredientItem[]> => {
  const { data, error } = await supabase
    .from("ingredients")
    .select("id, name, img_url")
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(mapIngredient);
};

export const getRecipes = async (): Promise<recipeItemType[]> => {
  const { data, error } = await supabase
    .from("recipes")
    .select(RECIPE_SELECT)
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(mapRecipe);
};

export const getRecipeBySlug = async (
  slug: string,
): Promise<recipeItemType | null> => {
  const { data, error } = await supabase
    .from("recipes")
    .select(RECIPE_SELECT)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ? mapRecipe(data) : null;
};
