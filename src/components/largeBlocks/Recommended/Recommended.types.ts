import type { Dispatch, SetStateAction } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";

type RecommendedProps = {
  recipes: recipeItemType[];
  setIsRecommendedOpen: Dispatch<SetStateAction<boolean>>;
  isRecommendedOpen: boolean;
};

export type { RecommendedProps };
