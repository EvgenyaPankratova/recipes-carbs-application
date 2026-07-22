"use client";

import { useEffect, useState } from "react";
import type { recipeItemType } from "@/commonTypes/recipes.types";
import CommonBlock from "@/components/largeBlocks/CommonBlock/CommonBlock";
import type { FoundedRecipesProps } from "@/components/largeBlocks/FoundedRecipes/FoundedRecipes.types";
import { RecipeItem } from "@/components/smallBlocks/RecipeItem/RecipeItem";
import { recipes } from "@/lib/recipes";

const FoundedRecipes = ({ selectedIngredients }: FoundedRecipesProps) => {
  const [foundedRecipes, setFoundedRecipes] = useState<recipeItemType[]>([]);
  const [isRecipeModeStrong, setRecipeModeStrong] = useState(true);

  useEffect(() => {
    const matchRecipes = new Set<recipeItemType>();

    if (selectedIngredients.length > 0) {
      for (const ingredient of selectedIngredients) {
        for (const recipe of recipes) {
          if (recipe.ingredients.find((elem) => elem.id === ingredient.id)) {
            matchRecipes.add(recipe);
          }
        }
      }

      setFoundedRecipes(Array.from(matchRecipes));
    }
  }, [selectedIngredients]);

  const handleRecipeMode = () => {
    setRecipeModeStrong((prev) => !prev);
  };

  return foundedRecipes.length > 0 ? (
    <CommonBlock
      mainTitle="Найденные рецепты"
      btn={{
        btnTitle: isRecipeModeStrong ? "Строгий режим" : "Нестрогий режим",
        btnFunc: handleRecipeMode,
      }}
      hasBreadCrumbs={false}
    >
      <div className="grid grid-cols-3 gap-8 w-full">
        {foundedRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </CommonBlock>
  ) : (
    <section>Рецептов не найдено...</section>
  );
};

export default FoundedRecipes;
