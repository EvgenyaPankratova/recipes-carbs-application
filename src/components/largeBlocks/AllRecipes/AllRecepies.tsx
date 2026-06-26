"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { recipeItem } from "@/commonTypes/recipes.types";
import type {
  compareKcalType,
  sortKcalKey,
} from "@/components/largeBlocks/AllRecipes/AllRecepies.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { recipes } from "@/lib/recipes";
import { CommonButton } from "../../ui/Button/CommonButton";

// import Heart from "@/svg/heart.svg";

const AllRecepies = () => {
  const [sortBy, setSortBy] = useState<sortKcalKey>("kcalDesc");

  const compareKcal: compareKcalType = {
    kcalDesc: () => recipes.toSorted((a, b) => a.kcal - b.kcal),
    kcalUp: () => recipes.toSorted((a, b) => b.kcal - a.kcal),
  };

  const sorted: recipeItem[] = compareKcal[sortBy]();

  const handleSort = () => {
    setSortBy((prev) => (prev === "kcalDesc" ? "kcalUp" : "kcalDesc"));
  };

  return (
    <CommonBlock
      leftTitle={"Все рецептыleft"}
      mainTitle={"Все рецепты"}
      btn={{
        btnTitle: `Сортировка по ${sortBy === "kcalDesc" ? "возрастанию" : "убыванию"} калорий`,
        btnFunc: handleSort,
      }}
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {sorted.map((recipe: recipeItem) => (
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
