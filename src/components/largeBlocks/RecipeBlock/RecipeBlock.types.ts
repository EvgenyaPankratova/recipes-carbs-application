import type { recipeItemType } from "@/commonTypes/recipes.types";

type RecipeBlockProps = {
  recipe: recipeItemType;
};

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export type { RecipeBlockProps, RecipePageProps };
