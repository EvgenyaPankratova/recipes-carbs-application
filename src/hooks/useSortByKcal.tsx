"use client";

import { useMemo, useState } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import type { sortKcalKey } from "@/components/largeBlocks/AllRecipes/AllRecepies.types";

export const useSortByKcal = (recipes: recipeItemType[]) => {
  const [sortBy, setSortBy] = useState<sortKcalKey>("kcalDesc");

  const sorted: recipeItemType[] = useMemo(() => {
    return recipes.toSorted((a, b) => {
      return sortBy === "kcalDesc" ? b.kcal - a.kcal : a.kcal - b.kcal;
    });
  }, [sortBy, recipes]);

  const handleSort = () => {
    setSortBy((prev) => (prev === "kcalAsc" ? "kcalDesc" : "kcalAsc"));
  };

  return [sorted, sortBy, handleSort] as const;
};
