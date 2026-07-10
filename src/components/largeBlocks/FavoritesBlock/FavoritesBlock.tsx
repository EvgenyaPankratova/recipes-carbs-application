"use client";

import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSortByKcal } from "@/hooks/useSortByKcal";
import { recipes } from "@/lib/recipes";

export const FavoritesBlock = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage("recipes", []);

  const [sorted, sortBy, handleSort] = useSortByKcal(favoriteRecipes);

  return (
    <CommonBlock
      mainTitle={"Мои рецепты"}
      mainTitleColor={"orange"}
      btn={{
        btnTitle: `Сортировка по ${sortBy === "kcalAsc" ? "возрастанию" : "убыванию"} калорий`,
        btnFunc: handleSort,
      }}
    >
      {favoriteRecipes.length ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {sorted.map((recipe: recipeItemType) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div>Нет избранных рецептов</div>
      )}
    </CommonBlock>
  );
};
