import type { recipeItemType } from "@/commonTypes/recipes.types";

type sortKcalKey = "kcalDesc" | "kcalAsc";
type compareKcalFuncItem = () => recipeItemType[];

type compareKcalType = Record<sortKcalKey, compareKcalFuncItem>;

export type { compareKcalType, sortKcalKey, compareKcalFuncItem };
