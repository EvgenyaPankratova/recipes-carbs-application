import type { Metadata } from "next";
import AllRecepies from "@/components/largeBlocks/AllRecipes/AllRecepies";

export const metadata: Metadata = {
  title: "Все рецепты",
};

export default function Recipes() {
  return (
    <div>
      <AllRecepies />
    </div>
  );
}
