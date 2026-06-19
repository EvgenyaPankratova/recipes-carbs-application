import type { recipeItem } from "@/commonTypes/recipes.types";

type sortKcalKey = "kcalDesc" | "kcalUp";
type compareKcalFuncItem = () => recipeItem[];

type compareKcalType = Record<sortKcalKey, compareKcalFuncItem>;

export type { compareKcalType, sortKcalKey, compareKcalFuncItem };
