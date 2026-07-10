import { notFound } from "next/navigation";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import RecipeBlock from "@/components/largeBlocks/RecipeBlock/RecipeBlock";
import type { RecipePageProps } from "@/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import { recipes } from "@/lib/recipes";

export default async function Recipe({ params }: RecipePageProps) {
  const { slug } = await params;

  const recipeData = recipes.find((rec: recipeItemType) => rec.slug === slug);

  if (!recipeData) {
    notFound();
  }

  return <RecipeBlock recipe={recipeData} />;
}
