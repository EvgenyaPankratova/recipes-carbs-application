import type { Metadata } from "next";
import AllRecepies from "@/components/largeBlocks/AllRecipes/AllRecepies";
import { getRecipes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Все рецепты",
};

export default async function Recipes() {
  const recipes = await getRecipes();

  return (
    <div>
      <AllRecepies recipes={recipes} />
    </div>
  );
}
