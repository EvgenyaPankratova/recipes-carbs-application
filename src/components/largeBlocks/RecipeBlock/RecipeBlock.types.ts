import type { recipeItemType } from "@/commonTypes/recipes.types";

type RecipeBlockProps = {
  recipe: recipeItemType;
  onRemoveFavorite?: (recipeId: number) => void;
};

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export type { RecipeBlockProps, RecipePageProps };
