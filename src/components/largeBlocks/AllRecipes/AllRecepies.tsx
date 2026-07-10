"use client";

import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { useSortByKcal } from "@/hooks/useSortByKcal";
import { recipes } from "@/lib/recipes";
import { CommonButton } from "../../ui/Button/CommonButton";

const AllRecepies = () => {
  const [sorted, sortBy, handleSort] = useSortByKcal(recipes);

  return (
    <CommonBlock
      mainTitle={"Все рецепты"}
      btn={{
        btnTitle: `Сортировка по ${sortBy === "kcalAsc" ? "возрастанию" : "убыванию"} калорий`,
        btnFunc: handleSort,
      }}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((recipe: recipeItemType) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <div className="justify-self-center my-8">
        <CommonButton theme="default">Показать ещё 6 из 12</CommonButton>
      </div>
    </CommonBlock>
  );
};

export default AllRecepies;
