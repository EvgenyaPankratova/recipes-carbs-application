"use client";

import { useMemo, useState } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { ShowMore } from "@/components/smallBlocks/ShowMore/ShowMore";
import { useSortByKcal } from "@/hooks/useSortByKcal";
import { recipes } from "@/lib/recipes";

const AllRecepies = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const total = recipes.length;
  const [sorted, sortBy, handleSort] = useSortByKcal(recipes);
  const visibleItems = sorted.slice(0, visibleCount);

  return (
    <CommonBlock
      mainTitle={"Все рецепты"}
      btn={{
        btnTitle: `Сортировка по ${sortBy === "kcalAsc" ? "возрастанию" : "убыванию"} калорий`,
        btnFunc: handleSort,
      }}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {visibleItems.map((recipe: recipeItemType) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <ShowMore
        total={total}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        step={4}
      />
    </CommonBlock>
  );
};

export default AllRecepies;
