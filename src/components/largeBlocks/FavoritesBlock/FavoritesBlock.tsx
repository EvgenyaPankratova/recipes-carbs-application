"use client";

import type { recipeItem } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const FavoritesBlock = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage("recipes", []);

  return (
    <CommonBlock
      mainTitle={"Мои рецепты"}
      mainTitleColor={"orange"}
      btn={{ btnTitle: "Сортировка по калорий" }}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {favoriteRecipes.map((recipe: recipeItem) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </CommonBlock>
  );
};
