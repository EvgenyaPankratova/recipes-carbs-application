"use client";

import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSortByKcal } from "@/hooks/useSortByKcal";

export const FavoritesBlock = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage<recipeItemType[]>(
  "recipes",
  [],
);

  const [sorted, sortBy, handleSort] = useSortByKcal(favoriteRecipes);

  const onRemoveFavorite = (recipeId: number) => {
    setFavoriteRecipes((prev: recipeItemType[]) =>
      prev.filter((res: recipeItemType) => res.id !== recipeId),
    );
  };

  return (
    <CommonBlock
      mainTitle="Мои рецепты"
      mainTitleColor="orange"
      btn={{
        btnTitle: `Сортировка по ${sortBy === "kcalAsc" ? "возрастанию" : "убыванию"} калорий`,
        btnFunc: handleSort,
      }}
    >
      {favoriteRecipes.length ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {sorted.map((recipe: recipeItemType) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onRemoveFavorite={() => onRemoveFavorite(recipe.id)}
            />
          ))}
        </div>
      ) : (
        <div>Нет избранных рецептов</div>
      )}
    </CommonBlock>
  );
};
