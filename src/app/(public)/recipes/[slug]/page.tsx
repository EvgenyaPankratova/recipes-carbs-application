import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipeBlock from "@/components/largeBlocks/RecipeBlock/RecipeBlock";
import type { RecipePageProps } from "@/components/largeBlocks/RecipeBlock/RecipeBlock.types";
import { getRecipeBySlug } from "@/lib/data";

export const metadata: Metadata = {
  title: "Рецепт: ...",
};

export default async function Recipe({ params }: RecipePageProps) {
  const { slug } = await params;

  const recipeData = await getRecipeBySlug(slug);

  if (!recipeData) {
    notFound();
  }

  return <RecipeBlock recipe={recipeData} />;
}
